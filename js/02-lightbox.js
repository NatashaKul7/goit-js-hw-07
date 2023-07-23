import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const itemsMarkup = createMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', itemsMarkup);


function createMarkup(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join('');
  }

console.log(galleryItems);

let gallerySimple = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250,
    });
gallerySimple.on('show.simplelightbox');

