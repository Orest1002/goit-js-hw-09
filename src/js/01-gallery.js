// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `
  <li data-gallery-item="${description}" class="gallery__item">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </li>
`);
gallery.insertAdjacentHTML('beforeend', markup.join(''));
gallery.addEventListener('click', onClick);
let currentItem;
function onClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  const itemCard = evt.target.parentNode.dataset.galleryItem;
  currentItem = galleryItems.find(({ description }) => description === itemCard);
  console.log(currentItem)};



import SimpleLightbox from "simplelightbox";