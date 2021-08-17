function openCardPreview(popup) {
  openPopup(popup);
}

function openPopup(popups) {
  popups.classList.add('popup_is-opened');
  document.addEventListener('keydown', _escapeListener);
}

function closePopup(popups) {
  popups.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', _escapeListener);
}

function _escapeListener(evt) {
  if (evt.key === 'Escape') {
  const popupIsOpened = document.querySelector('.popup_is-opened');
  closePopup(popupIsOpened);
  }
}

  // function processShowPhotoPopup(placePhoto, attributes = [{src: ''}, {alt: ''}], photoDescription = '') {
  //   placePhoto.addEventListener('click', () => {
  //     setElementAttributes(popupPhoto, attributes);
  //     popupPhotoDescription.textContent = photoDescription;
  //     openPopup(popup);
  //   });
  // }

export {openPopup, closePopup, openCardPreview };