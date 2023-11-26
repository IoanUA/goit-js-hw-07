import { galleryItems } from './gallery-items.js';
// Change code below this line


const container = document.querySelector(".gallery")

container.insertAdjacentHTML("beforeend", createMarkup(galleryItems))
container.addEventListener("click", handleClick)

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `).join("")
}


function handleClick(event) {
    event.preventDefault();

    if (event.target === event.currentTarget) {
        return;
    };

    const currentImg = event.target.dataset.source;
    // console.log(originalImageURL);
    
    const lightBox = basicLightbox.create(
        `<img src="${currentImg}" width="800" height="600"/>`
    );
    lightBox.show();

    function closeLightBox (event)  {
            if (event.key === 'Escape') {
                lightBox.close();
                document.removeEventListener('keydown', closeLightBox);
            }
        };
    document.addEventListener('keydown', closeLightBox);

}


        
5