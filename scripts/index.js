const editProfileButton = document.querySelector('.profile__edit-button'); // выбрал кнопку Редактировать
const popup = document.querySelector('.popup'); // присвоил весь контейнер
const closeEditFormButton = document.querySelector('.popup__close_profile-js'); // присвоил кнопке Закрыть
const nameInput = popup.querySelector('.popup__input_name-js'); // строка "Имя" в Инпуте Попап.
const jobInput = popup.querySelector('.popup__input_career-js'); // строка "О себе" в Инпуте Попап.
const profileName = document.querySelector('.profile__name'); // строка "Имя" в ХТМЛ
const profileCareer = document.querySelector('.profile__career'); // строка "О себе" в ХТМЛ
const submitForm = document.querySelector('.popup__container');
const cardAddButtom = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_card-form-js'); // присвоил весь контейнер
const placeName = document.querySelector('.popup__input_place-name-js'); // строка "Название" в Инпуте Попап.
const placeLink = document.querySelector('.popup__input_place-link-js'); // строка "Ссылка на картинку" в Инпуте Попап.
const cardCloseButton = popupCard.querySelector('.popup__close_card-js'); // кнопка закрытия попапа добавления карточки.
const formSaveButton = popupCard.querySelector('.popup__save-button');
const cardPreview = document.querySelector('.popup_image-preview');
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
const cardContainer = document.querySelector('.popup__card-container').addEventListener('submit', function(evt) {
evt.preventDefault();
cardCreator({name: placeName.value, link: placeLink.value});
console.log('123');
})

formSaveButton.addEventListener ('click', closeCardForm);

function openCardForm() {
  popupCard.classList.add('popup_is-opened');
}

function closeCardForm() {
  popupCard.classList.remove('popup_is-opened');
}

function openCardPreview() {
  cardPreview.classList.add('popup_is-opened');
}

function closeCardPreview() {
  cardPreview.classList.remove('popup_is-opened');
}

function openForm() {  // функция добавляет класс для показа попапа
    popup.classList.add('popup_is-opened');
    profileValueToForm();
}

function closeForm() {  // функция убирает класс, чтобы спрятать попап 
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
  profileCareer.textContent = jobInput.value;
  closeForm();
}

editProfileButton.addEventListener('click', openForm);
closeEditFormButton.addEventListener('click', closeForm);
submitForm.addEventListener('submit', formSubmitHandler);
cardAddButtom.addEventListener('click', openCardForm);
cardCloseButton.addEventListener('click', closeCardForm);
previewCloseButton.addEventListener('click', closeCardPreview);


function cardCreator({name, link}) {
  const elementCardClone = elementCard.cloneNode(true);   //клонирование блока с карточкой
  const cardImage = elementCardClone.querySelector('.elements__image');
  const cardName = elementCardClone.querySelector('.elements__title');
  const cardDeleteButton = elementCardClone.querySelector('.elements__trash-button');
  const cardLikeButton = elementCardClone.querySelector('.elements__like-button');
  cardImage.src = link; //присваиваю значение link
  cardName.textContent = name; //присваиваю значение name

  elementContainer.append(elementCardClone);
  cardDeleteButton.addEventListener('click', function(evt) {
    evt.target.closest('.elements__item').remove();
  })

  cardImage.addEventListener('click', function placePreview() { // превью для карточек
    openCardPreview();
    // console.log(cardImage.src);
    // console.log(cardName.textContent);
    cardPreview.querySelector('.popup__image').src = cardImage.src;
    cardPreview.querySelector('.popup__image-title').textContent= cardName.textContent;
  })  

  cardLikeButton.addEventListener('click', function() { // like для карточек
    cardLikeButton.classList.toggle('elements__like-button_is-active');
    // console.log(cardLikeButton);
  })

}

initialCards.forEach(function(cardsImport) { //забор значений карточек из массива
  cardCreator({name: cardsImport.name, link: cardsImport.link});
});
