window.addEventListener("scroll", function() { 
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
})

