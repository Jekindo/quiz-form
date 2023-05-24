
export default function getRefs() {
  return {
    quizForm: document.querySelector('form[name="quizForm"]'),
    addQuestionBtn: document.querySelector(
      'button[data-action="add-question"]'
    ),
  };
}
