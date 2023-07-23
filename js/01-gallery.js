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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join('');
  }

gallery.addEventListener('click', onItemClick);

function onItemClick(e) {
  e.preventDefault();

  console.log(e.target);

  if (e.target.nodeName !== 'IMG') { 
    return;
  }

  const instance = basicLightbox.create(`
		<img  src="${e.target.dataset.source}">`);
  instance.show();

  
    gallery.addEventListener('keydown', (e) => { 
  if (e.code === 'Escape') { 
      instance.close();
    }
    });
}

console.log(galleryItems);
