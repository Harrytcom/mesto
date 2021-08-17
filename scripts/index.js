import { openPopup, closePopup } from '../utils/utils.js';

const popups = document.querySelectorAll('.popup');
const editProfileButton = document.querySelector('.profile__edit-button'); // выбрал кнопку Редактировать
const popupProfileForm = document.querySelector('.popup_profile-form-js'); // присвоил весь контейнер
const closeEditFormButton = popupProfileForm.querySelector('.popup__close_profile-js'); // присвоил кнопке Закрыть
const nameInput = popupProfileForm.querySelector('.popup__input_name-js'); // строка "Имя" в Инпуте Попап.
const jobInput = popupProfileForm.querySelector('.popup__input_career-js'); // строка "О себе" в Инпуте Попап.
const profileName = document.querySelector('.profile__name'); // строка "Имя" в ХТМЛ
const profileCareer = document.querySelector('.profile__career'); // строка "О себе" в ХТМЛ
const submitForm = popupProfileForm.querySelector('.popup__container');
const cardAddButton = document.querySelector('.profile__add-button');
const popupCardForm = document.querySelector('.popup_card-form-js');
const placeName = document.querySelector('.popup__input_place-name-js'); // строка "Название" в Инпуте Попап.
const placeLink = document.querySelector('.popup__input_place-link-js'); // строка "Ссылка на картинку" в Инпуте Попап.
const cardCloseButton = popupCardForm.querySelector('.popup__close_card-js'); // кнопка закрытия попапа добавления карточки.
const popupCardPreview = document.querySelector('.popup_image-preview-js'); // открытие превью карточки
const previewCloseButton = document.querySelector('.popup__close_image-js');
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
const elementContainer = document.querySelector('.elements'); //контейнер под карточку
const elementCard = elementTemplate.querySelector('.elements__item');
const cardContainer = document.querySelector('.popup__card-container');
const config = {
  formElement: '.popup__container',
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_is-active',
};

const updateInputValue = (placeName, placeLink) => { // принудительно вызываю событие 'input'
  placeName.value = '';
  placeName.dispatchEvent(new Event('input'));
  placeLink.value = '';
  placeLink.dispatchEvent(new Event('input'));
};


const elementCardClone = elementCard.cloneNode(true);  //клонирование блока с карточкой
const cardImage = elementCardClone.querySelector('.elements__image'); //присвоил клону картинки
const cardName = elementCardClone.querySelector('.elements__title'); //присвоил клону строки с именем
const cardDeleteButton = elementCardClone.querySelector('.elements__trash-button'); //присвоил клону корзины
const cardLikeButton = elementCardClone.querySelector('.elements__like-button'); //присвоил клону лайка


// listener'ы открытия попапов
editProfileButton.addEventListener('click', () => { openPopup(popupProfileForm), profileValueToForm() });
cardAddButton.addEventListener('click', () => { openPopup(popupCardForm), clearForm(), updateInputValue(placeName, placeLink) });

// listener'ы закрытия попапов
closeEditFormButton.addEventListener('click', () => closePopup(popupProfileForm));
cardCloseButton.addEventListener('click', () => closePopup(popupCardForm));
previewCloseButton.addEventListener('click', () => closePopup(popupCardPreview));
submitForm.addEventListener('submit', submitFormHandler);

// cardContainer.addEventListener('submit', function(evt) {
//   evt.preventDefault();
//   const cardItem = createCard({name: placeName.value, link: placeLink.value});
//   prependCard(cardItem);
//   closePopup(popupCardForm);
// })


function clearForm() {  // функция очистки инпутов попапа при закрытии
    placeName.value = '';
    placeLink.value = '';
}

function profileValueToForm() {  // функция, которая позволяет забирать значения из HTML в Form.
    nameInput.value = profileName.textContent;
    jobInput.value = profileCareer.textContent;
}

function submitFormHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileCareer.textContent = jobInput.value;
  closePopup(popupProfileForm);
}

// function createCard({name, link}) {  //создаю карточку
//   const elementCardClone = elementCard.cloneNode(true);  //клонирование блока с карточкой
//   const cardImage = elementCardClone.querySelector('.elements__image'); //присвоил клону картинки
//   const cardName = elementCardClone.querySelector('.elements__title'); //присвоил клону строки с именем
//   const cardDeleteButton = elementCardClone.querySelector('.elements__trash-button'); //присвоил клону корзины
//   const cardLikeButton = elementCardClone.querySelector('.elements__like-button'); //присвоил клону лайка
//   cardImage.src = link; // беру значение link
//   cardName.textContent = name; // беру значение name
//   cardImage.alt = 'На фото ' + name; // беру значение alt
//   cardDeleteButton.addEventListener('click', function(evt) { //EL для кнопки удаления
//     evt.target.closest('.elements__item').remove();
//   });


//   cardImage.addEventListener('click', function placePreview() { //EL для превью карточки
//     openCardPreview();
//     popupCardPreview.querySelector('.popup__image').src = cardImage.src; //беру значение src
//     popupCardPreview.querySelector('.popup__image-title').textContent = cardName.textContent; //беру значение имени картинки
//   });


//   cardLikeButton.addEventListener('click', function() { // like для карточки
//     cardLikeButton.classList.toggle('elements__like-button_is-active');
//   });
//   return elementCardClone; // вернул объект
// }

// function prependCard(card) {
//   elementContainer.prepend(card);
// }

// initialCards.forEach(function(cardsImport) {
//   const cardItem = createCard({name: cardsImport.name, link: cardsImport.link});
//   prependCard(cardItem);
// });

// закрытие попапа кликом на оверлей
popups.forEach(popups => {
  popups.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
    closePopup(popups);
  }
    });
});

// enableValidation(config);


export { element, cardImage, cardName, cardDeleteButton, cardLikeButton, initialCards, elementContainer, popupCardPreview, elementCardClone, config, cardContainer };
