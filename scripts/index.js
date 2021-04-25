let editProfileButton = document.querySelector('.profile__edit-button'); // присвоил кнопке Редактировать
let popup = document.querySelector('.popup'); // присвоил весь контейнер
let closeEditFormButton = document.querySelector('.popup__close'); // присвоил кнопке Закрыть
let nameInput = popup.querySelector('.popup__input_name-js'); // строка "Имя" в Инпуте Попап.
let jobInput = popup.querySelector('.popup__input_career-js'); // строка "О себе" в Инпуте Попап.
let profileName = document.querySelector('.profile__name'); // строка "Имя" в ХТМЛ
let profileCareer = document.querySelector('.profile__career'); // строка "О себе" в ХТМЛ
let submitForm = document.querySelector('.popup__container');

function openForm() {  // функция добавляет класс для показа попапа
    popup.classList.add('popup_is-opened');
    profileValueToForm();
}

function closeForm() {  // функция убирает класс, чтобы убрать попап 
    popup.classList.remove('popup_is-opened');
    clearForm();
}

function clearForm() {  // функция очистки инпутов попапа при закрытии
    nameInput.value = '';
    jobInput.value = '';
}

function profileValueToForm () {  // функция которая позволяет забирать значения из HTML в Form.
    nameInput.value = profileName.textContent;
    jobInput.value = profileCareer.textContent;
}

function formSubmitHandler (evt) {  // функция которая позволяет забирать значения из Инпута в ХТМЛ.
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    console.log(profileName.textContent = nameInput.value);
    profileCareer.textContent = jobInput.value;
    console.log(profileCareer.textContent = jobInput.value);
    closeForm();
}

editProfileButton.addEventListener('click', openForm);
closeEditFormButton.addEventListener('click', closeForm);
submitForm.addEventListener('submit', formSubmitHandler);











