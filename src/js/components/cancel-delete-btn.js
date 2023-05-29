import * as QuestionCard from '../modules/question-card';
import Alert from '../plugins/alert-plugin';

const alert = new Alert({
  selector: '.js-alert',
});

export default class CancelDeleteBtn {
  constructor({ selector }) {
    this.buttonRef = this.#getRef(selector);

    this._isPressed = false;
  }

  #getRef(selector) {
    return document.querySelector(selector);
  }

  onClick() {
    this._isPressed = true;

    alert.clearTimeout();
    alert.hide(this._isPressed);

    QuestionCard.retrieve();
  }

  updateDeletedQuestionId(id) {
    this.buttonRef.setAttribute('deleted-question-id', id);
  }

  set isPressed(value) {
    this._isPressed = value;
  }

  get isPressed() {
    return this._isPressed;
  }
}
