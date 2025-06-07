const slider = document.querySelector(".image-comparison .slider");
const beforeImage = document.querySelector(".image-comparison .before-image");
const sliderLine = document.querySelector(".image-comparison .slider-line");
const sliderIcon = document.querySelector(".image-comparison .slider-icon");

function updateSliderPosition() {
    let sliderValue = slider.value;

    beforeImage.style.width = sliderValue + "%";

    sliderLine.style.left = sliderValue + "%";
    sliderIcon.style.left = sliderValue + "%";
}

document.addEventListener("DOMContentLoaded", updateSliderPosition);

slider.addEventListener("input", updateSliderPosition);