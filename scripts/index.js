let editProfileButton = document.querySelector('.profile__edit-button'); // присвоил кнопке Редактировать
let popup = document.querySelector('.popup'); // присвоил весь контейнер
let closeEditFormButton = document.querySelector('.popup__close'); // присвоил кнопке Закрыть
let nameInput = popup.querySelector('.popup__name'); // строка "Имя" в Инпуте Попап.
let jobInput = popup.querySelector('.popup__career'); // строка "О себе" в Инпуте Попап.
let saveButton = popup.querySelector('.popup__save-button'); // кнопка Сохранить в попапе.
let profileName = document.querySelector('.profile__name'); // строка "Имя" в ХТМЛ
let profileCareer = document.querySelector('.profile__career'); // строка "О себе" в ХТМЛ

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
    console.log(profileName.textContent);
    jobInput.value = profileCareer.textContent;
    console.log(profileCareer.textContent);
}

function formSubmitHandler (evt) {  // функция которая позволяет забирать значения из Инпута в ХТМЛ.
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileCareer.textContent = jobInput.value;
    closeForm();
}


editProfileButton.addEventListener('click', openForm);
closeEditFormButton.addEventListener('click', closeForm);
saveButton.addEventListener('click', formSubmitHandler);












