const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('#hamburger');
const crossEl = document.querySelector('#cross');

hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle('nav--open');
    hamburgerEl.classList.add('hamburger__icon--clicked');
    crossEl.classList.add('hamburger__icon--clicked');
    console.log('Hamburger eventListner executed');
});

crossEl.addEventListener('click', () => {
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger__icon--clicked');
    crossEl.classList.remove('hamburger__icon--clicked');
    console.log('Cross eventListner executed');
});

navEl.addEventListener('click', () => {
    navEl.classList.remove('nav--open');
    hamburgerEl.classList.remove('hamburger__icon--clicked');
    crossEl.classList.remove('hamburger__icon--clicked');
    console.log('Nav eventListner executed');
});

