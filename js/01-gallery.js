import { galleryItems } from "./gallery-items.js";
// Change code below this line

let instance;
const galleryContainer = document.querySelector("div.gallery");

galleryContainer.addEventListener("click", onGalleryContainerClick);
galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    )
    .join("");
}

function onGalleryContainerClick(event) {
  event.preventDefault();

  if (event.target.className !== "gallery__image") return;

  const image = event.target;

  showModal(image.dataset.source);
}

function showModal(imageSrc) {
  instance = basicLightbox.create(`
    <img src="${imageSrc}" >
`);
  instance.show();

  window.addEventListener("keydown", onEscapeClick);
}

function onEscapeClick(event) {
  const ESCAPE = "Escape";
  if (event.code != ESCAPE) return;

  instance.close();
  window.removeEventListener("keydown", onEscapeClick);
}
