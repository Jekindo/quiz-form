import * as bootstrap from 'bootstrap';
import getRefs from './functions/get-refs';
import getSvgSpriteUrl from './functions/get-svg-sprite-url';
import * as QuestionCard from './modules/question-card';
import * as Answers from './modules/answers';
import Alert from './plugins/alert-plugin';
import CancelDeleteBtn from './components/cancel-delete-btn';
import setActiveQuestionCard from './functions/set-active-question-card';
import onAddQuestionBtnClick from './functions/on-add-question-btn-click';
import getSelectCorrectAnswerButtonsComponents from './functions/get-select-correct-answer-btns-components';
import collectQuizFormData from './functions/collect-quiz-form-data';
import resetQuestionsContainerMarkup from './functions/reset-questions-container-markup';
import debounce from 'lodash.debounce';

const refs = getRefs();
const svgSpriteUrl = getSvgSpriteUrl();
const alert = new Alert({
  selector: '.js-alert',
});
const validationAlert = new Alert({
  selector: '.js-validation-alert',
});
const cancelDeleteBtn = new CancelDeleteBtn({
  selector: 'button[data-action="cancel-remove-question"]',
});
const formData = [];

refs.quizForm.addEventListener('input', onQuizFormInput);
refs.quizForm.addEventListener('submit', onQuizFormSubmit);
refs.quizForm.addEventListener('click', onQuizFormInteraction);
refs.addQuestionBtn.addEventListener('click', onAddQuestionBtnClick);
cancelDeleteBtn.buttonRef.addEventListener(
  'click',
  cancelDeleteBtn.onClick.bind(cancelDeleteBtn)
);
const listentedSelects = [];

function onQuizFormInteraction(evt) {
  if (evt.target.dataset.action === 'delete-question') {
    const questionToRemoveId = evt.target.getAttribute('question-id');
    QuestionCard.removeById(questionToRemoveId);
  }

  if (evt.target.nodeName === 'INPUT' || evt.target.nodeName === 'SELECT') {
    setActiveQuestionCard(evt);
  }

  if (evt.target.name === 'answerType') {
    if (listentedSelects.includes(evt.target)) {
      return;
    }

    listentedSelects.push(evt.target);

    evt.target.addEventListener(
      'change',
      Answers.onAnswerTypeChange.bind(Answers)
    );
  }

  if (evt.target.dataset.action === 'select-correct-answer') {
    Answers.onSelectCorrectAnswerBtnCLick(evt);
  }

  if (evt.target.dataset.action === 'remove-answer') {
    Answers.removeAnswer(evt);
  }

  if (evt.target.nodeName === 'INPUT' && evt.target.name === 'answerStub') {
    Answers.renderNewAnswer(evt);
  }
}

function onQuizFormSubmit(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const answersContainers = document.querySelectorAll('#answers-container');

  /*
   * 1-й Вариант
   *  В лоб пройтись по каждому элементу формы, и если пусто -> выходить из функции
   */

  for (const element of [...form.elements]) {
    if (
      element.name === 'description' ||
      element.name === 'answerStub' ||
      element.nodeName === 'BUTTON'
    ) {
      continue;
    }

    if (element.value === '') {
      element.classList.add('is-invalid');
      element.focus();

      validationAlert.setup({
        label: 'Є незаповнені поля !',
        newClass: 'alert-danger',
      });
      validationAlert.show();

      element.addEventListener('input', onInvalidFieldInput);

      return;
    }

    if (refs.questionsContainer.children.length < 1) {
      validationAlert.setup({
        label: 'Потрібно хоча б одне запитання',
        newClass: 'alert-danger',
      });
      validationAlert.show();
      return;
    }
  }

  const everyAnswersContainerHasCorrectAnswer = [...answersContainers].every(
    container => {
      const hasCorrectAnswer = Boolean(
        container.querySelectorAll('[name="answer"][correct]').length
      );

      if (!hasCorrectAnswer) {
        [
          ...container.querySelectorAll('input[name="answer"]'),
        ].forEach(input => {
					input.focus()
          input.classList.add('is-invalid');
        });
        console.log('Нету правильного ответа', container);
      }

      console.log(container, hasCorrectAnswer);
      return hasCorrectAnswer;
    }
  );

  if (!everyAnswersContainerHasCorrectAnswer) {
    validationAlert.setup({
      label: 'У кожному питанні повинна бути хоча б одна правильна відповідь',
      newClass: 'alert-danger',
    });
    validationAlert.show();

    return;
  }

  // * Опитування було створено успішно
	// ! Убирать старые классы
  validationAlert.setup({
    label: 'Форма успішно створена !',
    newClass: 'alert-success',
  });
  validationAlert.show();

  collectQuizFormData(form);
  resetQuestionsContainerMarkup();

  form.reset();
}

function onInvalidFieldInput(evt) {
  console.log('Удаляем класс');
  evt.currentTarget.classList.remove('is-invalid');

  setTimeout(() => {
    evt.target.removeEventListener('input', onInvalidFieldInput);
    console.log('Снимаем ивент листенер');
  }, 0);
}

function onQuizFormInput(evt) {
  //   formData[evt.target.name] = evt.target.value;
  //   console.log(formData.get('name'));
}
