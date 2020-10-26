const button = document.querySelector('.slidebar__button');
const slidebar = document.querySelector('.slidebar');

function toggleClass() {
slidebar.classList.toggle('slidebar_active');
}

button.addEventListener('click', toggleClass);
