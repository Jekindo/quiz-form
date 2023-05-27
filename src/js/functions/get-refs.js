
export default function getRefs() {
  return {
    quizForm: document.querySelector('form[name="quizForm"]'),
	questionsContainer: document.querySelector('.js-question-cards-container'),
    addQuestionBtn: document.querySelector(
      'button[data-action="add-question"]'
    ),
  };
}
