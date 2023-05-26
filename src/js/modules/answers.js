import getRefs from '../functions/get-refs';
import getSvgSpriteUrl from '../functions/get-svg-sprite-url';
import getRemoveAnswerButtonsComponents from '../functions/get-remove-answer-btns-components';
import getSelectCorrectAnswerButtonsComponents from '../functions/get-select-correct-answer-btns-components';

const refs = getRefs();
const svgSpriteUrl = getSvgSpriteUrl();

export const onAnswerTypeChange = evt => {
  // * Логика рендера ответов по типу

  const questionType = evt.target.value;
  renderAnswerSetup(questionType, evt.target);
};

export const renderAnswerSetup = (questionType, target) => {
  switch (questionType) {
    case 'text':
      renderAnswerTypeShortText(target);
      break;

    case 'textarea':
      renderAnswerTypeExpandedText(target);
      break;

    case 'radio':
      renderAnswerTypeRadio(target);
      break;

    case 'checkbox':
      renderAnswerTypeCheckbox(target);
      break;

    default:
      console.log('Invalid question type');
  }
};

export const renderAnswerTypeShortText = target => {
  // * Логика рендера ответов "текст (рядок)"

  const markup = `
	<label class="form-label">
	  Коротка відповідь
	  <input class="form-control mt-2" id="answer" type="text" name="answer" correct />
	</label>
	`;

  const questionCard = target.offsetParent;
  const answersContainer = questionCard.querySelector('#answers-container');

  answersContainer.innerHTML = markup;
};

export const renderAnswerTypeExpandedText = target => {
  // * Логика рендера ответов "текст (абзац)"

  const markup = `
  <label class="form-label">
  	Розгорнута відповідь
  	<textarea
		class="form-control mt-2"
		name="answer"
		correct
		rows="5"
		placeholder="Введіть відповідь тут..."
   ></textarea>
  </label>
	`;

  const questionCard = target.offsetParent;
  const answersContainer = questionCard.querySelector('#answers-container');

  answersContainer.innerHTML = markup;
};

export const renderAnswerTypeRadio = target => {
  // * Логика рендера ответов "Один зі списку"

  const markup = `
  <div class="input-group w-100 mb-3 align-items-center">
			  <svg class="" width="22" height="22">
				<use href="${svgSpriteUrl.pathname}#circle"></use>
			  </svg>
  
			  <input
				type="text"
				class="form-control  ms-2"
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
	`;

  const questionCard = target.offsetParent;
  const answersContainer = questionCard.querySelector('#answers-container');

  answersContainer.innerHTML = markup;
};

export const renderAnswerTypeCheckbox = target => {
  // * Логика рендера ответов "Декілька зі списку"

  const markup = `
  <div class="input-group w-100 mb-3 align-items-center">
			  <svg class="" width="22" height="22">
				<use href="${svgSpriteUrl.pathname}#app"></use>
			  </svg>
  
			  <input
				type="text"
				class="form-control  ms-2"
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
				<use href="${svgSpriteUrl.pathname}#app"></use>
			  </svg>
  
			  <input
				type="text"
				class="js-disabled-form-control form-control ms-2 disabled text-secondary"
				name="answerStub"
				value="Додати варіант"
			  />
			</div>
		  </div>
	`;

  const questionCard = target.offsetParent;
  const answersContainer = questionCard.querySelector('#answers-container');

  answersContainer.innerHTML = markup;
};

export const onSelectCorrectAnswerBtnCLick = evt => {
  const selectCorrectAnswerBtns = getSelectCorrectAnswerButtonsComponents();
  const nextTargetedBtn = selectCorrectAnswerBtns.find(btn =>
    btn.includes(evt.target)
  )[0];
  const nextCorrectInput = nextTargetedBtn.previousElementSibling;
  const inputGroup = nextCorrectInput.parentNode;
  const questionCard = inputGroup.offsetParent;
  const answerType = questionCard.querySelector('.js-form-select');
  const answersContainer = inputGroup.parentNode;
  const currectCorrectInput = answersContainer.querySelector(
    'input.form-control.is-correct'
  );
  const currentTargetedBtn = answersContainer.querySelector(
    'button.action-button.is-active'
  );

  if (
    currectCorrectInput &&
    answerType.value !== 'checkbox' &&
    currectCorrectInput !== nextCorrectInput
  ) {
    resetCorrectAnswer(currentTargetedBtn, currectCorrectInput);
  }

  if (nextCorrectInput.classList.contains('is-correct')) {
    resetCorrectAnswer(nextTargetedBtn, nextCorrectInput);
    return;
  }

  setCorrectAnswer(nextTargetedBtn, nextCorrectInput);
};

export const renderNewAnswer = evt => {
  const answerId = '';
  const input = evt.target;
  const answerTypeIconLabel =
    input.previousElementSibling.firstElementChild.href.animVal;
  console.log('🚀 answerTypeIconLabel:', answerTypeIconLabel);
  const markup = `
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
  `;

  input.classList.remove('disabled', 'text-secondary');
  input.value = `Варіант ${answerId}`;
  input.name = 'answer';
  input.insertAdjacentHTML('afterend', markup);

  renderAnswerStub(input.parentNode, answerTypeIconLabel);
};

function renderAnswerStub(inputGroup, answerType) {
  const markup = `
    <div class="input-group w-100 mb-3 align-items-center">
        <svg class="" width="22" height="22">
            <use href="${svgSpriteUrl.pathname}#${answerType.slice(
    answerType.indexOf('#') + 1
  )}"></use>
        </svg>

        <input
            type="text"
            class="js-disabled-form-control form-control ms-2 disabled text-secondary"
            name="answerStub"
            value="Додати варіант"
        />
    </div>
  `;

  inputGroup.insertAdjacentHTML('afterend', markup);
}

// * Логика удаления ответа
export const removeAnswer = evt => {
  const removeAnswerBtns = getRemoveAnswerButtonsComponents();
  const targetedBtn = removeAnswerBtns.find(btn => btn.includes(evt.target))[0];

  const inputGroup = targetedBtn.parentNode;
  inputGroup.classList.add('is-deleted');

  setTimeout(() => {
    inputGroup.remove();
  }, 250);
};

function setCorrectAnswer(btn, input) {
  btn.classList.add('is-active');
  input.classList.add('is-correct');
  input.setAttribute('correct', '');
}

function resetCorrectAnswer(btn, input) {
  btn.classList.remove('is-active');
  input.classList.remove('is-correct');
  input.removeAttribute('correct');
}

function updateCorrectAnswer() {}
