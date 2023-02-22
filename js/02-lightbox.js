import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

// console.log(galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
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
  var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
  console.log('click!');
  
}

galleryContainer.addEventListener("click", onGalleryContainerClick);
