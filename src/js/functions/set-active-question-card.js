export default function setActiveQuestionCard(evt) {
  const currentActiveCard = document.querySelector('.card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }

  if (evt.target.offsetParent.classList.contains('card')) {
    const nextActiveBtn = evt.target.offsetParent;
    nextActiveBtn.classList.add('is-active');
  }

  if (!evt.target.offsetParent.classList.contains('card')) {
    const nextActiveBtn = evt.target.offsetParent.offsetParent;
    nextActiveBtn.classList.add('is-active');
  }
}
