window.addEventListener("scroll", function() { 
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})