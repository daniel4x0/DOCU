// Tab Functionality
function openTab(evt, tabName) {
    document.querySelectorAll(".tabcontent").forEach(tab => tab.style.display = "none");
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementsByClassName("tablinks")[0].click();

// Carousel Functionality
let currentSlide = 0;
function changeSlide(direction) {
    let slides = document.getElementsByClassName("feature-slide");
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementsByClassName("feature-slide")[0].style.display = "block";
});

// Device Compatibility
function toggleCompatibility() {
    document.getElementById("device-compatibility").classList.toggle("hidden");
}
function openMiniTab(evt, tabName) {
    document.querySelectorAll(".mini-tabcontent").forEach(tab => tab.classList.remove("active"));
    document.getElementById(tabName).classList.add("active");
}
