
let navigationLink, main, navDisplay
window.addEventListener('load', start)

function start() {
    navigationLink = document.getElementById('header-navigation-mobile');
    main = document.getElementById('main');
}
function handleClickHamburger() {
    if (navigationLink.style.display === 'none' || !navigationLink.style.display) {
        navigationLink.style.display = 'block';
        main.style.display = 'none';
    } else {
        navigationLink.style.display = 'none';
        main.style.display = 'block';
    }
}