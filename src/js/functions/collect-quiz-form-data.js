import getSelectCorrectAnswerButtonsComponents from './get-select-correct-answer-btns-components';

export default function collectQuizFormData(form) {
  const formData = [];
  const refs = {
    questions: document.querySelectorAll('.js-question-card'),
    heading: document.querySelectorAll('.card#heading > input'),
  };

  const headingData = collectHeadingData(refs);
  const questionsData = collectQuestionsData(refs);

  formData.push(headingData, ...questionsData);


  return formData;
}

function collectHeadingData(refs) {
  const headingData = [...refs.heading].reduce((data, input) => {
    data[input.name] = input.value;

    return data;
  }, {});

  return headingData;
}

function collectQuestionsData(refs) {
  const questionsData = [...refs.questions].reduce((data, question) => {
    const questionElements = {
      question: question.querySelector('input[name="question"]'),
      answerType: question.querySelector('select[name="answerType"]'),
      answers: question.querySelectorAll('[name="answer"]'),
    };

    const questionData = {
      [questionElements.question.name]: questionElements.question.value,
      [questionElements.answerType.name]: questionElements.answerType.value,
      answers: [],
    };

    [...questionElements.answers].forEach((answer, index) => {
      const answerData = {
        id: index + 1,
        value: answer.value,
        correct: answer.hasAttribute('correct'),
      };

      questionData.answers.push(answerData);
    });

    data.push(questionData);

    return data;
  }, []);

  return questionsData;
}
