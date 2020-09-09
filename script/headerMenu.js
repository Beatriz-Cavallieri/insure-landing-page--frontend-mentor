
let navigationLink, main, navDisplay
window.addEventListener('load', start)

function start() {
    navigationLink = document.getElementById('header-navigation');
    main = document.getElementById('main');
}
function handleClickOpenMenu() {
    if (navigationLink.style.display === 'none' || !navigationLink.style.display) {
        navigationLink.style.display = 'block';
        main.style.display = 'none';
    } else {
        navigationLink.style.display = 'none';
        main.style.display = 'block';
    }
}