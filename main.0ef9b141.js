!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},s=n.parcelRequired432;function o(){return{quizForm:document.querySelector('form[name="quizForm"]'),questionsContainer:document.querySelector(".js-question-cards-container"),addQuestionBtn:document.querySelector('button[data-action="add-question"]')}}null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){a[t]=e},n.parcelRequired432=s),s.register("iE7OH",(function(e,n){var r,a;t(e.exports,"register",(function(){return r}),(function(t){return r=t})),t(e.exports,"resolve",(function(){return a}),(function(t){return a=t}));var s={};r=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)s[e[n]]=t[e[n]]},a=function(t){var e=s[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),s.register("aNJCr",(function(e,n){var r;t(e.exports,"getBundleURL",(function(){return r}),(function(t){return r=t}));var a={};function s(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(t){var e=a[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return s(t[2])}return"/"}(),a[t]=e),e}})),s.register("5k7tO",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),s("iE7OH").register(JSON.parse('{"lGm54":"main.0ef9b141.js","gwbLm":"sprite.0f136237.svg"}')),s("jIcLr");var i;function c(){return new URL(i)}i=s("aNJCr").getBundleURL("lGm54")+s("iE7OH").resolve("gwbLm");var u=s("8nrFW"),l=s("8MBJY"),d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return n};var f={};Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(t,e){m.default(t,e),e.add(t)};var v,m=(v=s("5k7tO"))&&v.__esModule?v:{default:v};var p=s("a2hTj"),b=null,h=new WeakSet,w=function(){"use strict";function t(n){var r=n.selector;e(l)(this,t),e(f)(this,h),this.refs=e(d)(this,h,g).call(this,r),this.isOpen=!1}return e(p)(t,[{key:"show",value:function(){var t=this;if(this.isOpen){var e=this;return this.refs.alert.style="display: none",this.refs.alert.classList.remove("is-visible"),this.clearTimeout(),setTimeout((function(){e.refs.alert.style=""}),10),setTimeout((function(){e.refs.alert.classList.add("is-visible")}),250),void(b=setTimeout((function(){e.hide()}),5e3))}this.isOpen=!0,this.refs.alert.classList.add("is-visible"),b=setTimeout((function(){t.hide()}),5e3)}},{key:"hide",value:function(t){this.isOpen=!1,this.refs.alert.classList.remove("is-visible"),t||N()}},{key:"clearTimeout",value:function(){clearTimeout(b)}},{key:"setLabelText",value:function(t){this.refs.label.textContent=t}}]),t}();function g(t){var e={};return e.alert=document.querySelector(t),e.label=e.alert.querySelector(".label"),e}l=s("8MBJY"),p=s("a2hTj");var y=new w({selector:".js-alert"}),q=new WeakSet,L=function(){"use strict";function t(n){var r=n.selector;e(l)(this,t),e(f)(this,q),this.buttonRef=e(d)(this,q,S).call(this,r),this._isPressed=!1}return e(p)(t,[{key:"onClick",value:function(){y.isActive&&console.log("Алерт активный"),this._isPressed=!0,y.clearTimeout(),y.hide(this._isPressed),O()}},{key:"updateDeletedQuestionId",value:function(t){this.buttonRef.setAttribute("deleted-question-id",t)}},{key:"isPressed",get:function(){return this._isPressed},set:function(t){this._isPressed=t}}]),t}();function S(t){return document.querySelector(t)}var T=o(),x=c(),j=new w({selector:".js-alert"}),A=new L({selector:'button[data-action="cancel-remove-question"]'}),_=null,E=function(t){var e=k(t);T.questionsContainer.insertAdjacentHTML("beforeend",e)},k=function(t){return'\n\t<div class="card js-question-card is-show rounded-top p-4 mb-3" id="'.concat(t,'">\n\t\t  <div class="row">\n\t\t\t<div class="col-md-6 mb-3">\n\t\t\t  <label class="form-label"> Запитання \n\t\t\t  <input\n\t\t\t\tclass="form-control mt-2"\n\t\t\t\ttype="text"\n\t\t\t\tname="question"\n\t\t\t\tplaceholder="Хто президент України ?"\n\t\t\t  />\n\t\t\t  </label>\n\t\t\t</div>\n  \n\t\t\t<div class="col-md-6 mb-3">\n\t\t\t  <label class="form-label">\n\t\t\t  Тип відповіді\n\t\t\t  <select\n\t\t\t\tclass="form-select js-form-select mt-2"\n\t\t\t\tname="answerType"\n\t\t\t  >\n\t\t\t\t<option value="radio" selected>Один зі списку</option>\n\t\t\t\t<option value="checkbox">Декілька зі списку</option>\n\t\t\t\t<option value="text">текст (рядок)</option>\n\t\t\t\t<option value="textarea">текст (абзац)</option>\n\t\t\t  </select>\n\t\t\t  </label>\n\t\t\t</div>\n\t\t  </div>\n  \n\t\t  <div class="mb-3" id="answers-container">\n\t\t\t<div class="input-group w-100 mb-3 align-items-center">\n\t\t\t  <svg class="" width="22" height="22">\n\t\t\t\t<use href="').concat(x.pathname,'#circle"></use>\n\t\t\t  </svg>\n  \n\t\t\t  <input\n\t\t\t\ttype="text"\n\t\t\t\tclass="form-control ms-2"\n\t\t\t\tname="answer"\n\t\t\t\tvalue="Варіант 1"\n\t\t\t  />\n  \n\t\t\t  <button\n\t\t\t\tclass="action-button"\n\t\t\t\ttype="button"\n\t\t\t\taria-label="select correct answer"\n\t\t\t\tdata-action="select-correct-answer"\n\t\t\t  >\n\t\t\t\t<svg class="action-button__icon" data-action="select-correct-answer">\n\t\t\t\t  <use href="').concat(x.pathname,'#check" data-action="select-correct-answer"></use>\n\t\t\t\t</svg>\n\t\t\t  </button>\n\t\t\t  <button\n\t\t\t\tclass="action-button"\n\t\t\t\ttype="button"\n\t\t\t\taria-label="remove answer"\n\t\t\t\tdata-action="remove-answer"\n\t\t\t  >\n\t\t\t\t<svg class="action-button__icon" data-action="remove-answer">\n\t\t\t\t  <use href="').concat(x.pathname,'#x-lg" data-action="remove-answer"></use>\n\t\t\t\t</svg>\n\t\t\t  </button>\n\t\t\t</div>\n  \n\t\t\t<div class="input-group w-100 mb-3 align-items-center">\n\t\t\t  <svg class="" width="22" height="22">\n\t\t\t\t<use href="').concat(x.pathname,'#circle"></use>\n\t\t\t  </svg>\n  \n\t\t\t  <input\n\t\t\t\ttype="text"\n\t\t\t\tclass="js-disabled-form-control form-control ms-2 disabled text-secondary"\n\t\t\t\tname="answerStub"\n\t\t\t\tvalue="Додати варіант"\n\t\t\t  />\n\t\t\t</div>\n\t\t  </div>\n  \n\t\t  <hr />\n  \n\t\t  \n\t\t  <button\n\t\t\tclass="action-button ms-auto"\n\t\t\ttype="button"\n\t\t\taria-label="delete question"\n\t\t\t\tdata-action="delete-question"\n\t\t\tquestion-id="').concat(t,'"\n\t\t  >\n\t\t\t<svg class="action-button__icon" question-id="').concat(t,'" data-action="delete-question">\n\t\t\t  <use href="').concat(x.pathname,'#trash-fill" question-id="').concat(t,'" data-action="delete-question"></use>\n\t\t\t</svg>\n\t\t  </button>\n\t\t</div>\n  \n\t\t</div>\n\t\t</div>\n\t')},N=function(){var t=document.querySelectorAll(".js-question-card");e(u)(t).map((function(t,n){t.id="q".concat(n+1);var r=t.querySelectorAll("[question-id]");e(u)(r).map((function(t){t.setAttribute("question-id","q".concat(n+1))}))}))},O=function(){var t=A.buttonRef.getAttribute("deleted-question-id"),e=Number(t.split("").filter((function(t){return!isNaN(t)})).join("")),n=null;setTimeout((function(){_.classList.add("is-show")}),250),1===e?T.questionsContainer.prepend(_):(n="q".concat(e-1),document.querySelector('.js-question-card[id="'.concat(n,'"]')).after(_))},C={};t(C,"onAnswerTypeChange",(function(){return M})),t(C,"renderAnswerSetup",(function(){return H})),t(C,"renderAnswerTypeShortText",(function(){return F})),t(C,"renderAnswerTypeExpandedText",(function(){return R})),t(C,"renderAnswerTypeRadio",(function(){return B})),t(C,"renderAnswerTypeCheckbox",(function(){return z})),t(C,"onSelectCorrectAnswerBtnCLick",(function(){return I})),t(C,"renderNewAnswer",(function(){return U})),t(C,"removeAnswer",(function(){return W}));u=s("8nrFW"),u=s("8nrFW");u=s("8nrFW");o();var P=c(),M=function(t){var e=t.target.value;H(e,t.target)},H=function(t,e){switch(t){case"text":F(e);break;case"textarea":R(e);break;case"radio":B(e);break;case"checkbox":z(e);break;default:console.log("Invalid question type")}},F=function(t){t.offsetParent.querySelector("#answers-container").innerHTML='\n\t<label class="form-label">\n\t  Коротка відповідь\n\t  <input class="form-control mt-2" id="answer" type="text" name="answer" correct />\n\t</label>\n\t'},R=function(t){t.offsetParent.querySelector("#answers-container").innerHTML='\n  <label class="form-label">\n  \tРозгорнута відповідь\n  \t<textarea\n\t\tclass="form-control mt-2"\n\t\tname="answer"\n\t\tcorrect\n\t\trows="5"\n\t\tplaceholder="Введіть відповідь тут..."\n   ></textarea>\n  </label>\n\t'},B=function(t){var e='\n  <div class="input-group w-100 mb-3 align-items-center">\n\t\t\t  <svg class="" width="22" height="22">\n\t\t\t\t<use href="'.concat(P.pathname,'#circle"></use>\n\t\t\t  </svg>\n  \n\t\t\t  <input\n\t\t\t\ttype="text"\n\t\t\t\tclass="form-control  ms-2"\n\t\t\t\tname="answer"\n\t\t\t\tvalue="Варіант 1"\n\t\t\t  />\n  \n\t\t\t  <button\n\t\t\t\tclass="action-button"\n\t\t\t\ttype="button"\n\t\t\t\taria-label="select correct answer"\n\t\t\t\tdata-action="select-correct-answer"\n\t\t\t  >\n\t\t\t\t<svg class="action-button__icon" data-action="select-correct-answer">\n\t\t\t\t  <use href="').concat(P.pathname,'#check" data-action="select-correct-answer"></use>\n\t\t\t\t</svg>\n\t\t\t  </button>\n\t\t\t  <button\n\t\t\t\tclass="action-button"\n\t\t\t\ttype="button"\n\t\t\t\taria-label="remove answer"\n\t\t\t\tdata-action="remove-answer"\n\t\t\t  >\n\t\t\t\t<svg class="action-button__icon" data-action="remove-answer">\n\t\t\t\t  <use href="').concat(P.pathname,'#x-lg" data-action="remove-answer"></use>\n\t\t\t\t</svg>\n\t\t\t  </button>\n\t\t\t</div>\n  \n\t\t\t<div class="input-group w-100 mb-3 align-items-center">\n\t\t\t  <svg class="" width="22" height="22">\n\t\t\t\t<use href="').concat(P.pathname,'#circle"></use>\n\t\t\t  </svg>\n  \n\t\t\t  <input\n\t\t\t\ttype="text"\n\t\t\t\tclass="js-disabled-form-control form-control ms-2 disabled text-secondary"\n\t\t\t\tname="answerStub"\n\t\t\t\tvalue="Додати варіант"\n\t\t\t  />\n\t\t\t</div>\n\t\t  </div>\n\t');t.offsetParent.querySelector("#answers-container").innerHTML=e},z=function(t){var e='\n  <div class="input-group w-100 mb-3 align-items-center">\n\t\t\t  <svg class="" width="22" height="22">\n\t\t\t\t<use href="'.concat(P.pathname,'#app"></use>\n\t\t\t  </svg>\n  \n\t\t\t  <input\n\t\t\t\ttype="text"\n\t\t\t\tclass="form-control  ms-2"\n\t\t\t\tname="answer"\n\t\t\t\tvalue="Варіант 1"\n\t\t\t\n\t\t\t  />\n  \n\t\t\t  <button\n\t\t\t\tclass="action-button"\n\t\t\t\ttype="button"\n\t\t\t\taria-label="select correct answer"\n\t\t\t\tdata-action="select-correct-answer"\n\t\t\t  >\n\t\t\t\t<svg class="action-button__icon" data-action="select-correct-answer">\n\t\t\t\t  <use href="').concat(P.pathname,'#check" data-action="select-correct-answer"></use>\n\t\t\t\t</svg>\n\t\t\t  </button>\n\t\t\t  <button\n\t\t\t\tclass="action-button"\n\t\t\t\ttype="button"\n\t\t\t\taria-label="remove answer"\n\t\t\t\tdata-action="remove-answer"\n\t\t\t  >\n\t\t\t\t<svg class="action-button__icon" data-action="remove-answer">\n\t\t\t\t  <use href="').concat(P.pathname,'#x-lg" data-action="remove-answer"></use>\n\t\t\t\t</svg>\n\t\t\t  </button>\n\t\t\t</div>\n  \n\t\t\t<div class="input-group w-100 mb-3 align-items-center">\n\t\t\t  <svg class="" width="22" height="22">\n\t\t\t\t<use href="').concat(P.pathname,'#app"></use>\n\t\t\t  </svg>\n  \n\t\t\t  <input\n\t\t\t\ttype="text"\n\t\t\t\tclass="js-disabled-form-control form-control ms-2 disabled text-secondary"\n\t\t\t\tname="answerStub"\n\t\t\t\tvalue="Додати варіант"\n\t\t\t  />\n\t\t\t</div>\n\t\t  </div>\n\t');t.offsetParent.querySelector("#answers-container").innerHTML=e},I=function(t){var n,r,a=(n=document.querySelectorAll('button[data-action="select-correct-answer"]'),e(u)(n).map((function(t){var n=[];return n.push(t),e(u)(t.children).forEach((function(t){var r;n.push(t),t.children&&(r=n).push.apply(r,e(u)(t.children))})),n}))),s=a.find((function(e){return e.includes(t.target)}))[0],o=s.previousElementSibling,i=o.parentNode,c=i.offsetParent,l=c.querySelector(".js-form-select"),d=i.parentNode,f=d.querySelector("input.form-control.is-valid"),v=d.querySelector("button.action-button.is-active");(o.classList.contains("is-invalid")&&function(t){e(u)(t.querySelectorAll('input[name="answer"]')).forEach((function(t){t.classList.remove("is-invalid")}))}(c),f&&"checkbox"!==l.value&&f!==o&&D(v,f),o.classList.contains("is-valid"))?D(s,o):(r=o,s.classList.add("is-active"),r.classList.add("is-valid"),r.setAttribute("correct",""))},U=function(t){var e=t.target,n=e.parentNode.previousElementSibling.querySelector('input[name="answer"]'),r=e.previousElementSibling.firstElementChild.href.animVal,a='\n  <button\n\tclass="action-button"\n\ttype="button"\n\taria-label="select correct answer"\n\tdata-action="select-correct-answer"\n  >\n  \t<svg class="action-button__icon" data-action="select-correct-answer">\n\t\t<use href="'.concat(P.pathname,'#check" data-action="select-correct-answer"></use>\n\t</svg>\n  </button>\n  <button\n    class="action-button"\n    type="button"\n    aria-label="remove answer"\n    data-action="remove-answer"\n  >\n\t<svg class="action-button__icon" data-action="remove-answer">\n\t\t<use href="').concat(P.pathname,'#x-lg" data-action="remove-answer"></use>\n\t</svg>\n  </button>\n  ');n.classList.contains("is-invalid")&&e.classList.add("is-invalid"),e.classList.remove("disabled","text-secondary","js-disabled-form-control"),e.value="Варіант ".concat(""),e.name="answer",e.insertAdjacentHTML("afterend",a),function(t,e){var n='\n    <div class="input-group w-100 mb-3 align-items-center">\n        <svg class="" width="22" height="22">\n            <use href="'.concat(P.pathname,"#").concat(e.slice(e.indexOf("#")+1),'"></use>\n        </svg>\n\n        <input\n            type="text"\n            class="js-disabled-form-control form-control ms-2 disabled text-secondary"\n            name="answerStub"\n            value="Додати варіант"\n        />\n    </div>\n  ');t.insertAdjacentHTML("afterend",n)}(e.parentNode,r)};var W=function(t){var n,r=(n=document.querySelectorAll('button[data-action="remove-answer"]'),e(u)(n).map((function(t){var n=[];return n.push(t),e(u)(t.children).forEach((function(t){var r;n.push(t),t.children&&(r=n).push.apply(r,e(u)(t.children))})),n}))).find((function(e){return e.includes(t.target)}))[0].parentNode;r.classList.add("is-deleted"),setTimeout((function(){r.remove()}),250)};function D(t,e){t.classList.remove("is-active"),e.classList.remove("is-valid"),e.removeAttribute("correct")}function $(t){var e;(e=document.querySelector(".card.is-active"))&&e.classList.remove("is-active");var n=null;t.target.offsetParent.classList.contains("card")&&(n=t.target.offsetParent),t.target.offsetParent.classList.contains("card")||(n=t.target.offsetParent.offsetParent),n.classList.add("is-active")}var J=o();var Q=s("hKHmD");u=s("8nrFW");function V(t){var n,r=[],a={questions:document.querySelectorAll(".js-question-card"),heading:document.querySelectorAll(".card#heading > input")},s=function(t){return e(u)(t.heading).reduce((function(t,e){return t[e.name]=e.value,t}),{})}(a),o=function(t){return e(u)(t.questions).reduce((function(t,n){var r,a={question:n.querySelector('input[name="question"]'),answerType:n.querySelector('select[name="answerType"]'),answers:n.querySelectorAll('[name="answer"]')},s=(r={},e(Q)(r,a.question.name,a.question.value),e(Q)(r,a.answerType.name,a.answerType.value),e(Q)(r,"answers",[]),r);return e(u)(a.answers).forEach((function(t,e){var n={id:e+1,value:t.value,correct:t.hasAttribute("correct")};s.answers.push(n)})),t.push(s),t}),[])}(a);return(n=r).push.apply(n,[s].concat(e(u)(o))),r}var G=o();var Y=s("l5bVx"),K=/^\s+|\s+$/g,X=/^[-+]0x[0-9a-f]+$/i,Z=/^0b[01]+$/i,tt=/^0o[0-7]+$/i,et=parseInt,nt="object"==typeof n&&n&&n.Object===Object&&n,rt="object"==typeof self&&self&&self.Object===Object&&self,at=nt||rt||Function("return this")(),st=Object.prototype.toString,ot=Math.max,it=Math.min,ct=function(){return at.Date.now()};function ut(t){var n=void 0===t?"undefined":e(Y)(t);return!!t&&("object"==n||"function"==n)}function lt(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(Y)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==st.call(t)}(t))return NaN;if(ut(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=ut(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(K,"");var r=Z.test(t);return r||tt.test(t)?et(t.slice(2),r?2:8):X.test(t)?NaN:+t}u=s("8nrFW"),o();var dt=new w({selector:".js-validation-error-alert"});console.log("🚀 validationErrorAlert:",dt);var ft=new w({selector:".js-validation-success-alert"});function vt(t){var n=document.querySelectorAll(".js-question-card"),r=!1,a=!0,s=!1,o=void 0;try{for(var i,c=t.elements[Symbol.iterator]();!(a=(i=c.next()).done);a=!0){var l=i.value;if("description"!==l.name&&"answerStub"!==l.name&&"BUTTON"!==l.nodeName)if(bt(l))return l.addEventListener("input",mt),l.classList.add("is-invalid"),l.focus(),ht("Є незаповнені поля !"),r}}catch(t){s=!0,o=t}finally{try{a||null==c.return||c.return()}finally{if(s)throw o}}var d=function(t){return t.length>=1}(n);if(!d)return ht("Потрібно хоча б одне запитання"),r;var f=!0,v=!1,m=void 0;try{for(var p,b=n[Symbol.iterator]();!(f=(p=b.next()).done);f=!0){var h=p.value;if(!pt(h))return e(u)(h.querySelectorAll('input[name="answer"]')).map((function(t){t.classList.add("is-invalid")})),h.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}),ht("У кожному питанні повинна бути хоча б одна правильна відповідь"),r}}catch(t){v=!0,m=t}finally{try{f||null==b.return||b.return()}finally{if(v)throw m}}return r=!0,ft.show(),r}function mt(t){t.currentTarget.classList.remove("is-invalid"),setTimeout((function(){t.target.removeEventListener("input",mt)}),0)}function pt(t){return Boolean(t.querySelectorAll('[name="answer"][correct]').length)}function bt(t){return""===t.value}function ht(t){dt.setLabelText(t),dt.show()}console.log("🚀 validationSuccessAlert:",ft);var wt=o(),gt=(c(),new w({selector:".js-alert"}),new w({selector:".js-validation-error-alert"}),new w({selector:".js-validation-success-alert"}),new L({selector:'button[data-action="cancel-remove-question"]'}));wt.quizForm.addEventListener("input",(function(t){})),wt.quizForm.addEventListener("submit",(function(t){t.preventDefault();var e=t.currentTarget;if(!vt(e))return;console.log(V()),n=k("q1"),G.questionsContainer.innerHTML=n,e.reset();var n})),wt.quizForm.addEventListener("click",(function(t){if("delete-question"===t.target.dataset.action){!function(t){A.updateDeletedQuestionId(t);var n=document.querySelector('.js-question-card[id="'.concat(t,'"]')),r=n.innerHTML,a=document.createElement("div");a.classList=e(u)(n.classList).filter((function(t){return"is-show"!==t})).join(" "),a.id=A.buttonRef.getAttribute("deleted-question-id"),a.insertAdjacentHTML("afterbegin",r),_=a,n.classList.remove("is-show"),setTimeout((function(){n.remove(),j.show()}),250)}(t.target.getAttribute("question-id"))}"INPUT"!==t.target.nodeName&&"SELECT"!==t.target.nodeName&&"TEXTAREA"!==t.target.nodeName||$(t);if("answerType"===t.target.name){if(yt.includes(t.target))return;yt.push(t.target),t.target.addEventListener("change",C.onAnswerTypeChange.bind(C))}"select-correct-answer"===t.target.dataset.action&&C.onSelectCorrectAnswerBtnCLick(t);"remove-answer"===t.target.dataset.action&&C.removeAnswer(t);"INPUT"===t.target.nodeName&&"answerStub"===t.target.name&&C.renderNewAnswer(t)})),wt.addQuestionBtn.addEventListener("click",(function(t){if(J.questionsContainer.children.length<1)E("q1");else{var e=J.questionsContainer.hasChildNodes()?J.questionsContainer.lastElementChild.id:"q0",n=Number(e.split("").filter((function(t){return!isNaN(t)})).join("")),r="q".concat(n+1);E(r)}})),gt.buttonRef.addEventListener("click",gt.onClick.bind(gt));var yt=[]}();
//# sourceMappingURL=main.0ef9b141.js.map
