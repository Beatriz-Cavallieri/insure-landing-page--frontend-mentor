
let navigation, main, footer
window.addEventListener('load', start)

function start() {
    navigation = document.getElementById('header-navigation');
    main = document.getElementsByTagName('main');
    footer = document.getElementsByTagName('footer');
}

function handleClickOpenMenu() {
    if (navigation.style.display === 'none' || !navigation.style.display) {
        navigation.style.display = 'block';
        main[0].style.display = 'none';
        footer[0].style.display = 'none';
    } else {
        navigation.style.display = 'none';
        main[0].style.display = 'block';
        footer[0].style.display = 'block';
    }
}