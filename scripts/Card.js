// class Card {
//     // cardItem = document.querySelector('#todolist-item-template').content;
//     // constructor( image, title, deleteButton, likeButton) {
//     //     this._image = image;
//     //     this._title = title;
//     //     this._deleteButton = deleteButton;
//     //     this._likeButton = likeButton;
//     // }

//     _getTemplate() { //получает разметку из template-элемента
//         const cardElement = document.querySelector('#element')
//         .content
//         .querySelector('.elements__item')
//         .cloneNode(true);

//         return cardElement;
//         console.log(cardElement)
//     }

//     generateCard() {  //готовит карточку к публикации
//         this._element = this._getTemplate();

//         this._element.querySelector('.elements__image').src = this._image;
//         this._element.querySelector('.elements__title').textContent = this._text;
//         this._element.querySelector('.elements__title').alt = this.alt; // 'На фото ' + this._text;

//         return this._element;
//     }

//     _setEventListeners() {
//         this._element.querySelector('.elements__like-button').addEventListener('click', () => {
//           this._cardLikeButton();

          

//         });
//       }
    
//       _cardLikeButton() {
//         this._element.querySelector('.elements__like-button').classList.toggle('elements__like-button_is-active');
//       }
//     }

//       _cardDeleteButton = () => {
//         if (this.card) {
//             this.card.remove();
//         }
//     }
    
    

// initialCards.forEach(function(item) {
//     const card = new Card(item.name, item.link, item.alt);
//     const cardElement = card.generateCard(); // const card = new Card(item.text, item.image);???
//     document.querySelector('.elements__item').prepend(cardElement);
//   });



// class Elements {
//     constructor(elementContainer) {
//         this._elementContainer = document.querySelector(elementContainer);

//     }

//     //добавить метод для добавления карточки в разметку
//     prependCard = (card) => {
//         elementContainer.prepend(card);
//       }
// }

// class PopupCardForm {
//     constructor(popupForm) {

//     }
// }

// const elements = new Elements('.elements');
// console.log(elements)


