import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector("ul.gallery");

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

const lightbox = new SimpleLightbox("ul.gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li>
            <a class="gallery__item" href="${original}">
                <img 
                    class="gallery__image" 
                    src="${preview}" 
                    alt="${description}"
                />
            </a>
        </li>`
    )
    .join("");
}
