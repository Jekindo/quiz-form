import getRefs from './get-refs';
import * as QuestionCard from '../modules/question-card';

const refs = getRefs();

export default function resetQuestionsContainerMarkup() {
  const markup = QuestionCard.makeQuestionCardMarkup('q1');
  refs.questionsContainer.innerHTML = markup;
}
