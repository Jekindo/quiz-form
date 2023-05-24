import * as QuestionCard from '../modules/question-card';

export default function onAddQuestionBtnClick(evt) {
  const btn = evt.currentTarget;
  const currentQuestionIdLabel = btn.previousElementSibling.getAttribute('id');
  const currentQuestionIdNumber = Number(
    currentQuestionIdLabel
      .split('')
      .filter(element => !isNaN(element))
      .join('')
  );
  const questionIdToRender = `q${currentQuestionIdNumber + 1}`;

  QuestionCard.renderNew(questionIdToRender);
}
