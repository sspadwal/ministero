// Mobile menu toggle logic
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');

function closeMenu() {
    mobileNav.classList.remove('open');
    menuIcon.style.display = '';
    closeIcon.style.display = 'none';
}

menuBtn.addEventListener('click', function() {
    if (mobileNav.classList.contains('open')) {
        closeMenu();
    } else {
        mobileNav.classList.add('open');
        menuIcon.style.display = 'none';
        closeIcon.style.display = '';
    }
});