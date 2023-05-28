export default function setActiveQuestionCard(evt) {
  removeActiveCardClass();

  let nextActiveCard = null;

  if (evt.target.offsetParent.classList.contains('card')) {
    nextActiveCard = evt.target.offsetParent;
  }

  if (!evt.target.offsetParent.classList.contains('card')) {
    nextActiveCard = evt.target.offsetParent.offsetParent;
  }

  addActiveCardClass(nextActiveCard);
}

function removeActiveCardClass() {
  const currentActiveCard = document.querySelector('.card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}
