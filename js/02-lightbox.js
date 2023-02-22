import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" data-title="${description}"/>
        </a>

      </div>
      `;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function onGalleryContainerClick(event) {
  event.preventDefault();

  const isGallryItem = event.target.classList.contains("gallery__image");

  if (!isGallryItem) {
    return;
  }

  //img.gallery__image
  const atfFronCurrentImage = document.querySelector('img.gallery__image');

  console.dir(atfFronCurrentImage.alt);
  
  
  var lightbox = new SimpleLightbox(".gallery a", {
    /* options */
    captionsData: 'alt', captionDelay: 250, 

  });
}

galleryContainer.addEventListener("click", onGalleryContainerClick);
