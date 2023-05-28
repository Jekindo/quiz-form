import * as QuestionCard from '../modules/question-card';

const NOTIFICATION_DELAY = 5000;
let timeoutId = null;

export default class Alert {
  constructor({ selector }) {
    this.refs = this.#getRefs(selector);

    this.isOpen = false;
  }

  #getRefs(selector) {
    const refs = {};

    refs.alert = document.querySelector(selector);
    refs.label = refs.alert.querySelector('.label');

    return refs;
  }

  show() {
    if (this.isOpen) {
      this.refs.alert.style = 'display: none';
      this.refs.alert.classList.remove('is-visible');
      this.clearTimeout();

      setTimeout(() => {
        this.refs.alert.style = '';
      }, 10);

      setTimeout(() => {
        this.refs.alert.classList.add('is-visible');
      }, 250);

      timeoutId = setTimeout(() => {
        this.hide();
      }, NOTIFICATION_DELAY);

      return;
    }

    this.isOpen = true;
    this.refs.alert.classList.add('is-visible');

    timeoutId = setTimeout(() => {
      this.hide();
    }, NOTIFICATION_DELAY);
  }

  hide(isCancelBtnPressed) {
    this.isOpen = false;

    this.refs.alert.classList.remove('is-visible');

    if (!isCancelBtnPressed) {
      QuestionCard.updateId();
    }
  }

  clearTimeout() {
    clearTimeout(timeoutId);
  }

  setLabelText(newText) {
    this.refs.label.textContent = newText;
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
