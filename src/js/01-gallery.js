import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";



// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function creargallery(items) {
    return items
    .map((item) => `<div class="gallery__item">
                    <a class="gallery__link" href="${item.original}">
                    <img class="gallery__image"
                    src="${item.preview}"
                    data-sourse="${item.original}"
                    alt="${item.description}"/>
                    </a>
                    </div>`).join("");

}

const agregarImagen = creargallery(galleryItems);

gallery.innerHTML = agregarImagen;

function action(imageAction) {
    imageAction.preventDefault();
}

let lightbox = new SimpleLightbox ('.gallery a', {captionsData: 'alt', captionDelay: 250});
