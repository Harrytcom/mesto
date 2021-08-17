import { openCardPreview } from '../utils/utils.js';
import { element, cardImage, cardName, cardDeleteButton, cardLikeButton, initialCards, elementContainer, popupCardPreview, elementCardClone, cardContainer } from './index.js';


class Card {

    _title
    _image
    _alt
    _element
    _cardImage
    _cardName
    _cardDeleteButton
    _cardLikeButton
    
    
  
    constructor(title, image, alt) {
      this._title = title;
      this._image = image;
      this._alt = alt;
      this._element = element;
      this._cardImage = cardImage;
      this._cardName = cardName;
      this._cardDeleteButton = cardName;
      this._cardLikeButton = cardLikeButton;
      this.elementCardClone = elementCardClone;
    }
  
    _getTemplate() {  // забираю темплейт
      const placeCard = document
      .querySelector('.element')
      .content.querySelector('.elements__item')
      .cloneNode(true);
  
      return placeCard;
    }

    _setEventListeners() {  // устанавливают слушателей событий
      this._element.querySelector('.elements__like-button').addEventListener('click', () => {
        this._likeHandler(); 
      });
  
      this._element.querySelector('.elements__trash-button').addEventListener('click', () => {
        this._deleteHandler();
      });
  
      this._element.querySelector('.elements__image').addEventListener('click', () => {
        popupCardPreview.querySelector('.popup__image').src = this._image; //беру значение src
        popupCardPreview.querySelector('.popup__image-title').textContent = this._title; //беру значение имени картинки
        openCardPreview(popupCardPreview);
      });
    }
 
    _likeHandler() {
      this._element.querySelector('.elements__like-button').classList.toggle('elements__like-button_is-active');
    }
  
    _deleteHandler() {
      this._element.remove();
    }
    
  
    generateCard() {  // содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.
      this._element = this._getTemplate();
      this._setEventListeners();
      this._element.querySelector('.elements__image').src = this._image; // принимает в конструктор её данные
      this._element.querySelector('.elements__title').textContent = this._title;
      this._element.querySelector('.elements__image').alt = 'На фото ' + this._title;
  
      return this._element;
    }

    _createCard = ({ name, link }) => {  //создаю карточку

      this._cardImage.src = link; // беру значение link
      this._cardName.textContent = name; // беру значение name
      this._cardImage.alt = 'На фото ' + name; // беру значение alt
      this._cardDeleteButton.addEventListener('click', (evt) => { //EL для кнопки удаления
        evt.target.closest('.elements__item').remove();
      });

      // initialCards.forEach(function(cardsImport) {
      //   const cardItem = _createCard({name: cardsImport.name, link: cardsImport.link});
      //   prependCard(cardItem);
      // });
      
      // cardContainer.addEventListener('submit', function(evt) {
      //   evt.preventDefault();
      //   const cardItem = this._createCard({name: placeName.value, link: placeLink.value});
      //   prependCard(cardItem);
      //   closePopup(popupCardForm);
      // })
    
      this._cardImage.addEventListener('click', placePreview = () => { //EL для превью карточки
        openCardPreview();
        this.popupCardPreview.querySelector('.popup__image').src = cardImage.src; //беру значение src
        this.popupCardPreview.querySelector('.popup__image-title').textContent = cardName.textContent; //беру значение имени картинки
      });

    
      this._cardLikeButton.addEventListener('click', () => { // like для карточки
        this._cardLikeButton.classList.toggle('elements__like-button_is-active');
      });

      return elementCardClone; // вернул объект
    }

    _prependCard = (card) => {
  elementContainer.prepend(card);
}


    
}



initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item.name, item.link);

  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM
  elementContainer.prepend(cardElement);
});

