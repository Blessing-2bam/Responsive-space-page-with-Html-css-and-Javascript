let totalSlides = document.querySelectorAll(".overall-firstdiv").length; // Count slides
let currentIndex = 0;

function moveToSlide(index) {
    const slides = document.querySelector(".slides");
    const dots = document.querySelectorAll(".dot");

    if (index >= totalSlides) {
        index = 0; // Reset to first slide if it exceeds the total count
    }

    currentIndex = index;
    slides.style.transform = `translateX(-${index * 100}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}


