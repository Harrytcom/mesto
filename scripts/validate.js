const hideInputError = (formElement, inputElement) => {
    // убираем ошибку
    //найти элемент спан с ошибкой
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_is-active');
    errorElement.textContent = '';
}


const showInputError = (formElement, inputElement) => {
    // показываем ошибку
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
    inputElement.classList.add('popup__input_type_error');
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add('popup__input-error_is-active');
}




const checkInputValidity = (formElement, inputElement) => {
//   проверить валидность инпута
if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement); // если валидный, то прячем ошибку
} else {
    showInputError(formElement, inputElement);
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

const setEventListeners = (formElement) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
 // найти все инпуты внутри форм
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

// find submit button
  const buttonElement = formElement.querySelector('.popup__save-button');

//  найти все кнопки сабмит
inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
        //проверить валидность инпута
        checkInputValidity(formElement, inputElement);
        toggleButtonState(buttonElement, inputList);
    });
})
// устанавливаем дефолтное значение для кнопки(проверяем)
   toggleButtonState(buttonElement, inputList)

};


const enableValidation = () => {
    //найти все формы на странице
    const formList = Array.from(document.querySelectorAll('.popup__container'));
    //поставить Ивент ЛИсенеров на каждую форму (на инпут и на кнопки) (включить валидацию на каждую форму)
    // для этого перебрать масси
    formList.forEach((formElement) => {
        setEventListeners(formElement)
    });

};


// console.log(enableValidation);
// console.log(formElement);
// console.log(setEventListeners);