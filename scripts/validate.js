const hideInputError = (formElement, inputElement, config) => {
    const { inputErrorClass, errorClass } = config; 
    console.log(config);
    // убираем ошибку
    //найти элемент спан с ошибкой
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
}

const showInputError = (formElement, inputElement, config) => {
    const { inputErrorClass, errorClass } = config;
    // показываем ошибку
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(errorClass);
}

const checkInputValidity = (formElement, inputElement, config) => {
//   проверить валидность инпута
if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, config); // если валидный, то прячем ошибку
} else {
    showInputError(formElement, inputElement, config);
  }
};

const hasInvalidInput = (inputList) => {
   return inputList.some(inputElement => !inputElement.validity.valid)
}

const toggleButtonState = (buttonElement, inputList) => {
    // елси форма валибная то включаем кнопку. Иначе выключаем кнопку.
    if (hasInvalidInput(inputList)) {
        // делаю кнопку не активной
        buttonElement.disabled = true;
    } else {
       // делаю кнопку активной 
       buttonElement.disabled = false;
    }
}

const setEventListeners = (formElement, config) => {

    const { inputSelector, submitButtonSelector, ...restConfig } = config;

    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    
 // найти все инпуты внутри форм
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

// find submit button
  const buttonElement = formElement.querySelector(submitButtonSelector);

//  найти все кнопки сабмит
inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
        //проверить валидность инпута
        checkInputValidity(formElement, inputElement, restConfig);
        toggleButtonState(buttonElement, inputList);
    });
})
// устанавливаем дефолтное значение для кнопки(проверяем)
   toggleButtonState(buttonElement, inputList)

};

const enableValidation = (config) => {
   const { formSelector, ...restConfig } = config;

    //найти все формы на странице
    const formList = Array.from(document.querySelectorAll(formSelector));
    //поставить Ивент ЛИсенеров на каждую форму (на инпут и на кнопки) (включить валидацию на каждую форму)
    // для этого перебрать масси
    formList.forEach((formElement) => {
        setEventListeners(formElement, restConfig)
    });

};
