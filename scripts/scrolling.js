//Target all anchor tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //On click
    anchor.addEventListener('click', function (e) {
        // Prevent default "click" behavior
        e.preventDefault();
        // Apply a smoother scrolling effect 
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});