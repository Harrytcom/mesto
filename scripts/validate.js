// const config = {
//   formSelector: '.popup__container', // форма полностью <form>
//   inputSelector: '.popup__input',  // любой из четырёх инпутов <input>
//   submitButtonSelector: '.popup__save-button',  // кнопка Сохранить - Создать
//   inputErrorClass: 'popup__input_type_error',  // закрашивает поле красной рамкой
//   errorClass: 'popup__input-error_is-active',  // меняет CSS св-во display

// };

// // const showInputError = (formElement, inputElement, config) => {  // показываем ошибку
// //     const { inputErrorClass, errorClass } = config;
// //     const errorElement = formElement.querySelector(`#${inputElement.id}-error`); //  выбираю span под input'ом
// //     inputElement.classList.add(inputErrorClass);
// //     errorElement.textContent = inputElement.validationMessage;
// //     errorElement.classList.add(errorClass);
// // };

// // const checkInputValidity = (formElmement, inputElement, config) => { //   проверить валидность инпута                            !!!ГОТОВО!!!
// //   if (inputElement.validity.valid) {
// //     hideInputError(formElement, inputElement, config); // если валидный, то прячем ошибку
// // } else {
// //     showInputError(formElement, inputElement, config);
// //   }
// // };


// const _hasInvalidInput = () => {
//    return inputList.some(inputElement => !inputElement.validity.valid);
// };



// // const toggleButtonState = (buttonElement, inputList) => { // если форма валидная то кнопка активна. Иначе - не активна //                                   !!!ГОТОВО!!!
// //     if (hasInvalidInput(inputList)) {
// //       buttonElement.disabled = true; // делаю кнопку не активной
// // } else {
// //       buttonElement.disabled = false; // делаю кнопку активной
// //     }
// // };

// // const setEventListeners = (formElement, config) => { //                                         !!!ГОТОВО!!!
// //     const { inputSelector, submitButtonSelector, ...restConfig } = config; 
// //     formElement.addEventListener('submit', (evt) => {
// //         evt.preventDefault();
// //     });
    
// const inputList = Array.from(document.querySelectorAll(config.formSelector));  // найти все формы
// //   const buttonElement = formElement.querySelector(submitButtonSelector); // найти кнопку Submit

// inputList.forEach((inputElement) => {  // найти все элементы формы
//     inputElement.addEventListener('input', () => {
//       checkInputValidity(formElement, inputElement, restConfig);  // проверить валидность инпута
//       toggleButtonState(buttonElement, inputList);
//     });
// });
//     // toggleButtonState(buttonElement, inputList);  // установить значение для кнопки(зависит от валидности формы)  


// const _hideInputError = (inputElement) => {  // убираю сообщение об ошибке
//   const { inputErrorClass, errorClass } = config;
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`); //  выбираю span под input'ом
//   inputElement.classList.remove(inputErrorClass);
//   errorElement.classList.remove(errorClass);
//   errorElement.textContent = '';
// };

// const _showInputError = (inputElement) => {  // показываем ошибку
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`); // выбираю span под input'ом
//   inputElement.classList.add(inputErrorClass);
//   errorElement.textContent = inputElement.validationMessage;
//   errorElement.classList.add(errorClass);
// };

const enableValidation = (config) => { 
  const { formSelector, ...restConfig } = config;
  const formList = Array.from(document.querySelectorAll(formSelector));  // найти все формы на странице
    formList.forEach((formElement) => {   // поставить Event Listener на каждую форму (на инпут и на кнопки) (включить валидацию на каждую форму)
      setEventListeners(formElement, restConfig);  // для этого перебрать массив
    });
};



// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { config } from './index.js'

class FormValidator {
  _form
  _formSelector
  _inputSelector  // любой из четырёх инпутов
  _submitButtonSelector
  _inputErrorClass
  _errorClass
  _errorElement  // нет в конфиге, в конструкторе



  constructor(config, formElement){
    this._form = formElement;
    this._formSelector = config.formSelector;
    // this._form = document.querySelector(formSelector);
    this._inputSelector = config.inputSelector;  // любой из четырёх инпутов
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._errorElement = config.errorElement;
    
  }
  


// _checkInputValidity = (formElement, inputElement, config) => { //   проверить валидность инпута
//   if (inputElement.validity.valid) {
//     hideInputError(formElement, inputElement, config); // если валидный, то прячем ошибку
// } else {
//     showInputError(formElement, inputElement, config);
//   }
// };


// _hasInvalidInput = (inputList) => {
//    return inputList.some(inputElement => !inputElement.validity.valid);
// };

// _toggleButtonState = (buttonElement, inputList) => { // если форма валидная то кнопка активна. Иначе - не активна
//     if (hasInvalidInput(inputList)) {
//       buttonElement.disabled = true; // делаю кнопку не активной
// } else {
//       buttonElement.disabled = false; // делаю кнопку активной
//     }
// }; _________________________________________________________________________________________________________________


_checkInputValidity = (inputElement, formElement) => { // проверить валидность инпута
  if (inputElement.validity.valid) {

   this._hideInputError(inputElement, config); // если валидный, то прячем ошибку

} else {
  this._showInputError(formElement, inputElement, config);

  }
};

_setEventListeners = () => {
  this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
  });

  const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));  // найти все инпуты внутри форм ..OK
  const buttonElement = this._form.querySelector(this._submitButtonSelector); // найти кнопку Submit
  
inputList.forEach((inputElement) => {  // найти все элементы формы
    inputElement.addEventListener('input', () => {

      this._checkInputValidity(inputElement);  // проверить валидность инпута
      this._toggleButtonState(buttonElement, inputList);
    });
});

  this._toggleButtonState(buttonElement, inputList);  // установить значение для кнопки(зависит от валидности формы)
};

  _hasInvalidInput = () => {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
      };

  _toggleButtonState = (buttonElement, inputList, inputElement) => { // если форма валидная то кнопка активна. Иначе - не активна
    if (this._hasInvalidInput(inputList, inputElement)) {
      buttonElement.disabled = true; // делаю кнопку не активной
} else {
      buttonElement.disabled = false; // делаю кнопку активной
    }
  };

  _showInputError = (inputElement) => {  // показываем ошибку
    const errorElement = this._form.querySelector(`#${inputElement}-error`); // выбираю span под input'ом
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
  };
  
   _hideInputError = (inputElement) => {  // убираю сообщение об ошибке
    const { inputErrorClass, errorClass } = config;

    const errorElement = this._form.querySelector(`#${inputElement.id}-error`); //  выбираю span под input'ом
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };

    enableValidation = () => {
      this._setEventListeners(this._form);
    }



}


let profileValue = new FormValidator(config, document.querySelector('[name="profileValues"]'));
let cardValue = new FormValidator(config, document.querySelector('[name="cardValues"]'));

profileValue.enableValidation();