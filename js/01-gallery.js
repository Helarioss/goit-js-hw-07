import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector("div.gallery");
galleryContainer.addEventListener("click", onGalleryContainerClick);
galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

let instance = null;

function onGalleryContainerClick(event) {
  event.preventDefault();

  if (event.target.className !== "gallery__image") return;

  const image = event.target;

  showModal(image.dataset.source);
}

function showModal(imageSrc) {
  instance = basicLightbox.create(`<img src="${imageSrc}" >`, {
    onShow: () => {
      window.addEventListener("keydown", onEscapeClick);
    },
    onClose: () => {
      window.removeEventListener("keydown", onEscapeClick);
    },
  });

  instance.show();
}

function onEscapeClick(event) {
  console.log("click");
  const ESCAPE = "Escape";
  if (event.code === ESCAPE) {
    instance.close();
  }
}

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
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
