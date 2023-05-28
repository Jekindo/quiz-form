import * as QuestionCard from '../modules/question-card';

const NOTIFICATION_DELAY = 5000;
let timeoutId = null;

export default class Alert {
  constructor({ selector }) {
    this.refs = this.#getRefs(selector);
    this.isActive = false;
  }

  #getRefs(selector) {
    const refs = {};

    refs.alert = document.querySelector(selector);
    refs.label = refs.alert.querySelector('.label');

    return refs;
  }

  show() {
    this.isActive = true;

    this.refs.alert.classList.add('is-visible');

    timeoutId = setTimeout(() => {
      this.hide();
    }, NOTIFICATION_DELAY);
  }

  hide(isCancelBtnPressed) {
    this.refs.alert.classList.remove('is-visible');
    QuestionCard.updateId(isCancelBtnPressed);
  }

  clearTimeout() {
    clearTimeout(timeoutId);
  }

  set label(newLabel) {
	this.refs.label.textContent = newLabel
  }

  //   onMouseLeave(evt) {
  //     console.log('Вешаем тайм-аут');
  //
  //     timeoutId = setTimeout(() => {
  //       this.hide();
  //       console.log('Закрывает алерт');
  //     }, NOTIFICATION_DELAY);
  //   }
  //
  //   onMouseEnter(evt) {
  //     this.clearTimeout();
  //     console.log('Снимаем тайм-аут');
  //   }
}
