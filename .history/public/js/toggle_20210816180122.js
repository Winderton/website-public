window.addEventListener("scroll", function() { 
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})

const toggleButton = document.getElementsByClassName('burg')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})