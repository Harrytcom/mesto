const hideInputError = (formElement, inputElement, config) => {  // убираю сообщение об ошибке
    const { inputErrorClass, errorClass } = config; 
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); //  выбираю span под input'ом
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};

const showInputError = (formElement, inputElement, config) => {  // показываем ошибку
    const { inputErrorClass, errorClass } = config;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); //  выбираю span под input'ом
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
};

const checkInputValidity = (formElement, inputElement, config) => { //   проверить валидность инпута. A!!!
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config); // если валидный, то прячем ошибку
} else {
    showInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
   return inputList.some(inputElement => !inputElement.validity.valid);
};

const toggleButtonState = (buttonElement, inputList) => { // если форма валидная то кнопка активна. Иначе - не активна. B!!!
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true; // делаю кнопку не активной
} else {
      buttonElement.disabled = false; // делаю кнопку активной
    }
};

const setEventListeners = (formElement, config) => {
    const { inputSelector, submitButtonSelector, ...restConfig } = config;
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));  // найти все инпуты внутри форм
  const buttonElement = formElement.querySelector(submitButtonSelector); // найти кнопку Submit

inputList.forEach((inputElement) => {  // найти все кнопки сабмит
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, restConfig);  // проверить валидность инпута
      toggleButtonState(buttonElement, inputList);
    });
});

    toggleButtonState(buttonElement, inputList);  // установить значение для кнопки(зависит от валидности формы)

};

const updateInputValue = (placeName, placeLink) => { // принудительно вызываю событие 'input'
  placeName.value = '';
  placeName.dispatchEvent(new Event('input'));
  placeLink.value = '';
  placeLink.dispatchEvent(new Event('input'));
};

const enableValidation = (config) => {
  const { formSelector, ...restConfig } = config;
  const formList = Array.from(document.querySelectorAll(formSelector));  // найти все формы на странице
    formList.forEach((formElement) => {   // поставить Event Listener на каждую форму (на инпут и на кнопки) (включить валидацию на каждую форму)
      setEventListeners(formElement, restConfig);  // для этого перебрать массив
    });
};

