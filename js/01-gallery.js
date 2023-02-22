import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

console.log(galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="large-image.jpg"
            alt="${description}"
          />
        </a>
      </div>
      `;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function onGalleryContainerClick(event) {
    event.preventDefault();
 };
