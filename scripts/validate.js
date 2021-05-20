const hideInputError = (formElement, inputElement, config) => { // убираем ошибку
const { inputErrorClass, errorClass } = config;
const errorElement = formElement.querySelector(`#${inputElement.id}-error`) //найти элемент спан с ошибкой
inputElement.classList.remove(inputErrorClass);
errorElement.classList.remove(errorClass);
errorElement.textContent = '';
}

const showInputError = (formElement, inputElement, config) => {
  const { inputErrorClass, errorClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); // показываем ошибку
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
}

const checkInputValidity = (formElement, inputElement, config) => { //   проверить валидность инпута
  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config); // если валидный, то прячем ошибку
} else {
    showInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid)
};

const toggleButtonState = (buttonElement, inputList) => { // если форма валибная то включаем кнопку. Иначе выключаем кнопку.  
  if (hasInvalidInput(inputList)) { // делаю кнопку не активной
    buttonElement.disabled = true;
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
const buttonElement = formElement.querySelector(submitButtonSelector); // найти кнопку Submit(save)
inputList.forEach((inputElement) => { //  найти все кнопки сабмит
  inputElement.addEventListener('input', () => {
    checkInputValidity(formElement, inputElement, restConfig);  //проверить валидность инпута
    toggleButtonState(buttonElement, inputList);
});
})
toggleButtonState(buttonElement, inputList) // устанавливаем дефолтное значение для кнопки(проверяем)
};

const enableValidation = (config) => {
  const { formSelector, ...restConfig } = config;
  const formList = Array.from(document.querySelectorAll(formSelector)); //найти все формы на странице
  formList.forEach((formElement) => { //поставить Ивент ЛИсенеров на каждую форму (на инпут и на кнопки) (включить валидацию на каждую форму)
    setEventListeners(formElement, restConfig)  // для этого перебрать масси
  });
};