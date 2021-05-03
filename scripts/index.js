let editProfileButton = document.querySelector('.profile__edit-button'); // выбрал кнопку Редактировать
let popup = document.querySelector('.popup'); // присвоил весь контейнер
let closeEditFormButton = document.querySelector('.popup__close'); // присвоил кнопке Закрыть
let nameInput = popup.querySelector('.popup__input_name-js'); // строка "Имя" в Инпуте Попап.
let jobInput = popup.querySelector('.popup__input_career-js'); // строка "О себе" в Инпуте Попап.
let profileName = document.querySelector('.profile__name'); // строка "Имя" в ХТМЛ
let profileCareer = document.querySelector('.profile__career'); // строка "О себе" в ХТМЛ
let submitForm = document.querySelector('.popup__container');

// Вторая часть работы
// const elementsLikeButton = document.querySelector('.elements__like-button'); //Выбрал кнопку лайк
// function likeButtonActive(evt) {
//     popup.classList.add('elements__like-button_is-active');
//     popup.classList.remove('elements__like-button');
// }
const cardAddButton = document.querySelector('.profile__add-button');


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

// Вторая часть работы
// elementsLikeButton.addEventListener('click', function likeButtonActive(evt) {
//     popup.classList.add('elements__like-button_is-active');
//     popup.classList.remove('elements__like-button');
//     console.log('123');
// });

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const element = document.querySelector('#element'); //Темплейт
const elementTemplate = element.content; //всё что внутри темплейта
const elementContainer = document.querySelector('.elements__card-container'); //контейнер под карточку

initialCards.forEach(function(cardsImport) {
  const elementCard = elementTemplate.querySelector('.elements__item').cloneNode(true);   //клонирование блока с карточкой
  elementContainer.append(elementCard);   //клонирование блока с карточкой
  elementTemplate.querySelector('.elements__image').src = cardsImport.link; //передаю значение link
  elementTemplate.querySelector('.elements__title').textContent = cardsImport.name; //передаю значение name
});


const addCardForm = document.querySelector('#addCardForm'); //Темплейт
const cardFormTemplate = addCardForm.content; //всё что внутри темплейта













