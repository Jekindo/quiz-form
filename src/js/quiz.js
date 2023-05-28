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
import validateQuizForm from './functions/validate-quiz-form';

const refs = getRefs();
const svgSpriteUrl = getSvgSpriteUrl();
const alert = new Alert({
  selector: '.js-alert',
});
const validationErrorAlert = new Alert({
  selector: '.js-validation-error-alert',
});
const validationSuccessAlert = new Alert({
  selector: '.js-validation-success-alert',
});
const cancelDeleteBtn = new CancelDeleteBtn({
  selector: 'button[data-action="cancel-remove-question"]',
});

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

  if (
    evt.target.nodeName === 'INPUT' ||
    evt.target.nodeName === 'SELECT' ||
    evt.target.nodeName === 'TEXTAREA'
  ) {
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

  const isFormValid = validateQuizForm(form);

  if (!isFormValid) {
    return;
  }

  console.log(collectQuizFormData(form));
  resetQuestionsContainerMarkup();

  form.reset();
}

function onQuizFormInput(evt) {
  //   formData[evt.target.name] = evt.target.value;
  //   console.log(formData.get('name'));
}
