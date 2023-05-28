import getRefs from './get-refs';
import Alert from '../plugins/alert-plugin';
import getSelectCorrectAnswerButtonsComponents from './get-select-correct-answer-btns-components';

const refs = getRefs();
const validationErrorAlert = new Alert({
  selector: '.js-validation-error-alert',
});
console.log('🚀 validationErrorAlert:', validationErrorAlert);

const validationSuccessAlert = new Alert({
  selector: '.js-validation-success-alert',
});
console.log('🚀 validationSuccessAlert:', validationSuccessAlert);


export default function validateQuizForm(form) {
  const questions = document.querySelectorAll('.js-question-card');
  let isFormValid = false;

  /*
   * Проверяем каждый элемент формы(Input)
   */
  for (const element of form.elements) {
    if (
      element.name === 'description' ||
      element.name === 'answerStub' ||
      element.nodeName === 'BUTTON'
    ) {
      continue;
    }

    const isElementEmpty = checkElement(element);

    if (!isElementEmpty) {
      continue;
    }

    element.addEventListener('input', onInvalidFieldInput);
    element.classList.add('is-invalid');
    element.focus();

    showValidationErrorAlert('Є незаповнені поля !');

    return isFormValid;
  }

  /*
   * Проверяем количество вопросов
   */
  const isEnoughQuestions = checkQuestionsLength(questions);

  if (!isEnoughQuestions) {
    showValidationErrorAlert('Потрібно хоча б одне запитання');
    return isFormValid;
  }

  /*
   * Проверяем наличие в каждом вопросе правильного ответа
   */
  for (const question of questions) {
    const hasCorrectAnswer = checkCorrectAnswerAvailability(question);

    if (hasCorrectAnswer) {
      continue;
    }

    [...question.querySelectorAll('input[name="answer"]')].map(input => {
      input.classList.add('is-invalid');
    });
    question.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });

    showValidationErrorAlert(
      'У кожному питанні повинна бути хоча б одна правильна відповідь'
    );

    return isFormValid;
  }

  // * Опитування було створено успішно
  isFormValid = true;
  validationSuccessAlert.show();

  return isFormValid;
}

function onInvalidFieldInput(evt) {
  evt.currentTarget.classList.remove('is-invalid');

  setTimeout(() => {
    evt.target.removeEventListener('input', onInvalidFieldInput);
  }, 0);
}

function checkCorrectAnswerAvailability(question) {
  return Boolean(question.querySelectorAll('[name="answer"][correct]').length);
}

function checkQuestionsLength(questions) {
  return questions.length >= 1;
}

function checkElement(element) {
  return element.value === '';
}

function showValidationErrorAlert(text) {
  validationErrorAlert.setLabelText(text);
  validationErrorAlert.show();
}
