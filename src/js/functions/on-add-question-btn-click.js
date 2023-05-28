import getRefs from './get-refs';
import * as QuestionCard from '../modules/question-card';

const refs = getRefs();

export default function onAddQuestionBtnClick(evt) {
  if (refs.questionsContainer.children.length < 1) {
    QuestionCard.renderNew('q1');
    return;
  }

  const lastQuestionId = refs.questionsContainer.hasChildNodes()
    ? refs.questionsContainer.lastElementChild.id
    : 'q0';
  const lastQuestionIdToNumber = Number(
    lastQuestionId
      .split('')
      .filter(element => !isNaN(element))
      .join('')
  );
  const questionIdToRender = `q${lastQuestionIdToNumber + 1}`;

  QuestionCard.renderNew(questionIdToRender);
}
