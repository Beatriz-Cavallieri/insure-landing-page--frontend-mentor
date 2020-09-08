function handleClickHamburger() {
    const navigationLinks = document.getElementById('header-navigation-mobile');
    const menuIcon = document.getElementById('header-menu-icon');
    const main = document.getElementById('main');
    if (navigationLinks.style.display === 'none') {
        navigationLinks.style.display = 'block';
        main.style.display = 'none';
    } else {
        navigationLinks.style.display = 'none';
        main.style.display = 'block';
    }
}