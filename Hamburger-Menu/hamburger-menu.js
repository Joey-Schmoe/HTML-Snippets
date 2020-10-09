function displayNav() {
    document.getElementById("nav-menu").classList.toggle("do-not-display");
}

document.getElementById('nav-menu').querySelector('i').addEventListener('click', function () {
    displayNav();
});

document.querySelector('header  i').addEventListener('click', function () {
    displayNav();
});