import Alert from '../plugins/alert-plugin';
import getRefs from '../functions/get-refs';
import getSvgSpriteUrl from '../functions/get-svg-sprite-url';
import CancelDeleteBtn from '../components/cancel-delete-btn';

const refs = getRefs();
const svgSpriteUrl = getSvgSpriteUrl();
const alert = new Alert({
  selector: '.js-alert',
});
const cancelDeleteBtn = new CancelDeleteBtn({
  selector: 'button[data-action="cancel-remove-question"]',
});
let deletedQuestionCardMarkup = null;

// * Логика добавления нового вопроса
export const renderNew = qId => {
  const markup = makeQuestionCardMarkup(qId);

  refs.questionsContainer.insertAdjacentHTML('beforeend', markup);
};

export const makeQuestionCardMarkup = qId => {
  return `
	<div class="card js-question-card is-show rounded-top p-4 mb-3" id="${qId}">
		  <div class="row">
			<div class="col-md-6 mb-3">
			  <label class="form-label"> Запитання 
			  <input
				class="form-control mt-2"
				type="text"
				name="question"
				placeholder="Хто президент України ?"
			  />
			  </label>
			</div>
  
			<div class="col-md-6 mb-3">
			  <label class="form-label">
			  Тип відповіді
			  <select
				class="form-select js-form-select mt-2"
				name="answerType"
			  >
				<option value="radio" selected>Один зі списку</option>
				<option value="checkbox">Декілька зі списку</option>
				<option value="text">текст (рядок)</option>
				<option value="textarea">текст (абзац)</option>
			  </select>
			  </label>
			</div>
		  </div>
  
		  <div class="mb-3" id="answers-container">
			<div class="input-group w-100 mb-3 align-items-center">
			  <svg class="" width="22" height="22">
				<use href="${svgSpriteUrl.pathname}#circle"></use>
			  </svg>
  
			  <input
				type="text"
				class="form-control ms-2"
				name="answer"
				value="Варіант 1"
			  />
  
			  <button
				class="action-button"
				type="button"
				aria-label="select correct answer"
				data-action="select-correct-answer"
			  >
				<svg class="action-button__icon" data-action="select-correct-answer">
				  <use href="${svgSpriteUrl.pathname}#check" data-action="select-correct-answer"></use>
				</svg>
			  </button>
			  <button
				class="action-button"
				type="button"
				aria-label="remove answer"
				data-action="remove-answer"
			  >
				<svg class="action-button__icon" data-action="remove-answer">
				  <use href="${svgSpriteUrl.pathname}#x-lg" data-action="remove-answer"></use>
				</svg>
			  </button>
			</div>
  
			<div class="input-group w-100 mb-3 align-items-center">
			  <svg class="" width="22" height="22">
				<use href="${svgSpriteUrl.pathname}#circle"></use>
			  </svg>
  
			  <input
				type="text"
				class="js-disabled-form-control form-control ms-2 disabled text-secondary"
				name="answerStub"
				value="Додати варіант"
			  />
			</div>
		  </div>
  
		  <hr />
  
		  
		  <button
			class="action-button ms-auto"
			type="button"
			aria-label="delete question"
				data-action="delete-question"
			question-id="${qId}"
		  >
			<svg class="action-button__icon" question-id="${qId}" data-action="delete-question">
			  <use href="${svgSpriteUrl.pathname}#trash-fill" question-id="${qId}" data-action="delete-question"></use>
			</svg>
		  </button>
		</div>
  
		</div>
		</div>
	`;
};

export const removeById = qId => {
  cancelDeleteBtn.updateDeletedQuestionId(qId);

  const questionCard = document.querySelector(`.js-question-card[id="${qId}"]`);
  const deletedQuestionCardInnerMarkup = questionCard.innerHTML;
  const card = document.createElement('div');

  card.classList = [...questionCard.classList]
    .filter(value => value !== 'is-show')
    .join(' ');
  card.id = cancelDeleteBtn.buttonRef.getAttribute('deleted-question-id');
  card.insertAdjacentHTML('afterbegin', deletedQuestionCardInnerMarkup);
  deletedQuestionCardMarkup = card;

  questionCard.classList.remove('is-show');

//   ! На РЕФАКТОРИНГ (Тестирование прошло успешно)
  
  const questionRefs = {
    question: questionCard.querySelector('input[name="question"]'),
    answerType: questionCard.querySelector('select[name="answerType"]'),
    answers: questionCard.querySelectorAll('[name="answer"]'),
  };

  const questionData = {
    question: questionRefs.question.value,
    answerTyppe: questionRefs.answerType.value,
    answers: [],
  };

  [...questionRefs.answers].forEach((answer, index) => {
    const answerData = {
      id: index + 1,
      value: answer.value,
      correct: answer.hasAttribute('correct'),
    };

    questionData.answers.push(answerData);
  });

  deletedQuestionCardMarkup.querySelector('input[name="question"]').value =
    questionData.question;
  [...deletedQuestionCardMarkup.querySelectorAll('[name="answer"]')].map(
    (answer, index) => {
      console.log(answer);
      console.log(questionData.answers[index]);
      answer.value = questionData.answers[index].value;
    }
  );

  setTimeout(() => {
    questionCard.remove();
    alert.show();
    // alert.refs.alert.addEventListener(
    //   'mouseenter',
    //   alert.onMouseEnter.bind(alert)
    // );
    // alert.refs.alert.addEventListener(
    //   'mouseleave',
    //   alert.onMouseLeave.bind(alert)
    // );
  }, 250);
};

export const updateId = () => {
  const questionCards = document.querySelectorAll('.js-question-card');

  [...questionCards].map((question, index) => {
    question.id = `q${index + 1}`;

    const deleteQuestionBtn = question.querySelectorAll('[question-id]');
    [...deleteQuestionBtn].map(element => {
      element.setAttribute('question-id', `q${index + 1}`);
    });
  });
};

export const retrieve = () => {
  const currentQuestionid = cancelDeleteBtn.buttonRef.getAttribute(
    'deleted-question-id'
  );
  const currentQuestionIdToNumber = Number(
    currentQuestionid
      .split('')
      .filter(element => !isNaN(element))
      .join('')
  );

  setTimeout(() => {
    deletedQuestionCardMarkup.classList.add('is-show');
  }, 250);

  if (currentQuestionIdToNumber === 1) {
    refs.questionsContainer.prepend(deletedQuestionCardMarkup);
  } else {
    const previousQuestionId = `q${currentQuestionIdToNumber - 1}`;
    document
      .querySelector(`.js-question-card[id="${previousQuestionId}"]`)
      .after(deletedQuestionCardMarkup);
  }
};
