import getRefs from './get-refs';
import * as QuestionCard from '../modules/question-card';

const refs = getRefs();

export default function onAddQuestionBtnClick(evt) {
  const lastQuestionId = refs.questionsContainer.lastElementChild.id;
  const lastQuestionIdToNumber = Number(
    lastQuestionId
      .split('')
      .filter(element => !isNaN(element))
      .join('')
  );
  const questionIdToRender = `q${lastQuestionIdToNumber + 1}`;

  QuestionCard.renderNew(questionIdToRender);
}
