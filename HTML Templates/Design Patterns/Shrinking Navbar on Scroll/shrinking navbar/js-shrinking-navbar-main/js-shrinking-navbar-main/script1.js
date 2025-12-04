const navbar = document.querySelector('nav#navbar');

let lastScrollY = window.scrollY;

window.addEventListener(
  'scroll',
  () => {
    if (!navbar) return;

    const currentY = window.scrollY;

    // Shrink when scrolling down
    if (currentY > lastScrollY && currentY > 340) {
      navbar.classList.add('small');
    }

    // Grow back only at the very top
    if (currentY < lastScrollY && currentY < 335) {
      navbar.classList.remove('small');
    }

    lastScrollY = currentY;
  },
  { passive: true }
);
