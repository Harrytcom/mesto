import { profileValue, cardValue, config, } from './index.js'

class FormValidator {
  constructor(config, formElement){
    this._form = formElement;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;  // любой из четырёх инпутов
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._errorElement = config.errorElement;
    
  }

_checkInputValidity = (inputElement) => { // проверить валидность инпута
  if (inputElement.validity.valid) {

   this._hideInputError(inputElement); // если валидный, то прячем ошибку

} else {
  this._showInputError(inputElement);
  }
};

_setEventListeners = () => {
  this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
  });

  const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));  // найти все инпуты внутри форм
  const buttonElement = this._form.querySelector(this._submitButtonSelector); // найти кнопку Submit
  
inputList.forEach((inputElement) => {  // найти все элементы формы
    inputElement.addEventListener('input', () => {

      this._checkInputValidity(inputElement);  // проверить валидность инпута
      this._toggleButtonState(buttonElement, inputList, inputElement);
    });
});

  this._toggleButtonState(buttonElement, inputList);  // установить значение для кнопки(зависит от валидности формы)
};

  _hasInvalidInput = () => {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
      };

  _toggleButtonState = (buttonElement, inputList, inputElement) => {
    
   
    if (this._hasInvalidInput(inputList, inputElement)) { // если форма валидная то кнопка активна. Иначе - не активна
      
      buttonElement.disabled = true; // делаю кнопку не активной
} else {
      buttonElement.disabled = false; // делаю кнопку активной
    }
  };

  _showInputError = (inputElement) => {  // показываем ошибку
    const name = inputElement.getAttribute('name');
    const errorElement = this._form.querySelector(`#${name}-error`); // выбираю span под input'ом
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  };
  
   _hideInputError = (inputElement) => {  // убираю сообщение об ошибке
    const { inputErrorClass, errorClass, } = config;

    const errorElement = this._form.querySelector(`#${inputElement.id}-error`); //  выбираю span под input'ом
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };

    enableValidation = () => {
      this._setEventListeners(this._form);
    }
}

// profileValue.enableValidation();
// cardValue.enableValidation();

// const profileValue = new FormValidator(config, document.querySelector('[name="profileValues"]'));
// const cardValue = new FormValidator(config, document.querySelector('[name="cardValues"]'));

export { FormValidator };