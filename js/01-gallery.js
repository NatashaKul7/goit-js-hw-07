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
    
    const itemLink = e.target;
    const parentItemLink = itemLink.closest('.gallery__link');
    
    console.log(parentItemLink);


    // console.log(galleryItems.href);
    // console.log(e.target.dataset.source);
}





// console.log(createMarkup(galleryItems));

// console.log(galleryItems);
