const hamburgerButton = document.getElementsByClassName('mobile-nav-toggle')[0]
const primaryNav = document.getElementById("main-navigation")
hamburgerButton.addEventListener('click', () => {
    const navVisibility = primaryNav.getAttribute('data-visible');

    if (navVisibility === 'false') {
        primaryNav.setAttribute('data-visible', 'true');
        hamburgerButton.setAttribute('aria-expanded', 'true');
    } else {
        primaryNav.setAttribute('data-visible', 'false');
        hamburgerButton.setAttribute('aria-expanded', 'false');
    }
});