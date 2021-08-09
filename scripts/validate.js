

// const showInputError = (formElement, inputElement, config) => {  // показываем ошибку
//     const { inputErrorClass, errorClass } = config;
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`); //  выбираю span под input'ом
//     inputElement.classList.add(inputErrorClass);
//     errorElement.textContent = inputElement.validationMessage;
//     errorElement.classList.add(errorClass);
// };

// const checkInputValidity = (formElmement, inputElement, config) => { //   проверить валидность инпута                            !!!ГОТОВО!!!
//   if (inputElement.validity.valid) {
//     hideInputError(formElement, inputElement, config); // если валидный, то прячем ошибку
// } else {
//     showInputError(formElement, inputElement, config);
//   }
// };


// const hasInvalidInput = (formElement, inputElement, config)) => {
//    return inputList.some(inputElement => !inputElement.validity.valid);
// };



// const toggleButtonState = (buttonElement, inputList) => { // если форма валидная то кнопка активна. Иначе - не активна //                                   !!!ГОТОВО!!!
//     if (hasInvalidInput(inputList)) {
//       buttonElement.disabled = true; // делаю кнопку не активной
// } else {
//       buttonElement.disabled = false; // делаю кнопку активной
//     }
// };

// const setEventListeners = (formElement, config) => { //                                         !!!ГОТОВО!!!
//     const { inputSelector, submitButtonSelector, ...restConfig } = config; 
//     formElement.addEventListener('submit', (evt) => {
//         evt.preventDefault();
//     });
    
//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));  // найти все инпуты внутри форм
//   const buttonElement = formElement.querySelector(submitButtonSelector); // найти кнопку Submit

// inputList.forEach((inputElement) => {  // найти все кнопки сабмит
//     inputElement.addEventListener('input', () => {
//       checkInputValidity(formElement, inputElement, restConfig);  // проверить валидность инпута
//       toggleButtonState(buttonElement, inputList);
//     });
// });
//     toggleButtonState(buttonElement, inputList);  // установить значение для кнопки(зависит от валидности формы)  
// };

// const updateInputValue = (placeName, placeLink) => { // принудительно вызываю событие 'input'
//   placeName.value = '';
//   placeName.dispatchEvent(new Event('input'));
//   placeLink.value = '';
//   placeLink.dispatchEvent(new Event('input'));
// };

// const enableValidation = (config) => {
//   const { formSelector, ...restConfig } = config;
//   const formList = Array.from(document.querySelectorAll(formSelector));  // найти все формы на странице
//     formList.forEach((formElement) => {   // поставить Event Listener на каждую форму (на инпут и на кнопки) (включить валидацию на каждую форму)
//       setEventListeners(formElement, restConfig);  // для этого перебрать массив
//     });
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const config = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_is-active',
};

class FormValidator {
  _form
  _formSelector
  _inputSelector
  _submitButtonSelector
  _inputErrorClass
  _errorClass
  _errorElement  // нет в конфиге, в конструкторе

  inputElement  // нет в конфиге, в конструкторе
  formElement  // нет в конфиге, в конструкторе
  inputList  // нет в конфиге, в конструкторе
  buttonElement  // нет в конфиге, в конструкторе


  constructor(config, formElement){
    this._form = formElement;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
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
// };



_setEventListeners = () => {
  this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
  });

    
  const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));  // найти все инпуты внутри форм
  const buttonElement = this._form.querySelector(this._submitButtonSelector); // найти кнопку Submit

  inputList.forEach((inputElement) => {  // найти все кнопки сабмит
      inputElement.addEventListener('input', () => {
        this._checkInputValidity();  // проверить валидность инпута
        this._toggleButtonState();
      });
  });
  this._toggleButtonState(buttonElement, inputList);  // установить значение для кнопки(зависит от валидности формы)
};

enableValidation = () => {
  this._setEventListeners();
  }

  _toggleButtonState = (buttonElement, inputList) => { // если форма валидная то кнопка активна. Иначе - не активна
    if (_hasInvalidInput(inputList)) {
      buttonElement.disabled = true; // делаю кнопку не активной
} else {
      buttonElement.disabled = false; // делаю кнопку активной
    }

    _showInputError = (inputElement) => {  // показываем ошибку
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); // выбираю span под input'ом
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
   
};

    _hideInputError = (inputElement) => {  // убираю сообщение об ошибке
    // const { inputErrorClass, errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); //  выбираю span под input'ом
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };

_checkInputValidity = (inputElement) => { // проверить валидность инпута
  
  if (inputElement.validity.valid) {
    this._hideInputError(formElement, inputElement); // если валидный, то прячем ошибку
} else {
  this._showInputError(formElement, inputElement);
  }
};



_hasInvalidInput = () => {
return this._inputList.some(inputElement => !inputElement.validity.valid);
  };

};

}


let cardValue = new FormValidator(config, document.querySelector('[name="cardValues"]'));
let profileValue = new FormValidator(config, document.querySelector('[name="profileValues"]'));

profileValue.enableValidation();
