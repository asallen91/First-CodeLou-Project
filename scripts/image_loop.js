var slideIndex = 0;
showSlides();
// This Function targets multiple variables
function showSlides() {
    var i;
    // Target the specific class "slideshow"
    var slides = document.getElementsByClassName("slideshow");
    // Apply a for loop to cycle through selected images
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display="none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    // Wait 6 seconds to cycle to the next image
    setTimeout(showSlides, 6000);
};
