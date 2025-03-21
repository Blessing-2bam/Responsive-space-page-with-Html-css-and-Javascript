const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

function moveToSlide(index) {
    currentIndex = index;
    updateSlider();
}

function updateSlider() {
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}
