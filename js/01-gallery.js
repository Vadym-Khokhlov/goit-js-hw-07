import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

galleryMarkupMaker(galleryItems);

const galleryList = galleryMarkupMaker(galleryItems);

function galleryMarkupMaker(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

galleryRef.insertAdjacentHTML("afterbegin", galleryList);

galleryRef.addEventListener("click", imgGalleryClicker);

function imgGalleryClicker(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();

  const instance = basicLightbox.create(`
  <img src="${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  galleryRef.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
