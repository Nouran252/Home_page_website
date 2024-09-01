// IMAGE SLIDER

const S5_slides = document.querySelectorAll(".S5_slides .S5_content");
let S5_slideIndex = 0;
let S5_intervalId = null;

document.addEventListener("DOMContentLoaded", S5_initializeSlider);

function S5_initializeSlider(){
    if(S5_slides.length > 0){
        S5_slides[S5_slideIndex].classList.add("S5_displaySlide");
        // intervalId = setInterval(nextSlide, 5000);
    }
}

function S5_showSlide(Sindex){
    if(Sindex >= S5_slides.length){
        S5_slideIndex = 0;
    }
    else if(Sindex < 0){
        S5_slideIndex = S5_slides.length - 1;
    }

    S5_slides.forEach(S5_slide => {
        S5_slide.classList.remove("S5_displaySlide");
    });
    S5_slides[S5_slideIndex].classList.add("S5_displaySlide");
}

function S5_prevSlide(){
    clearInterval(S5_intervalId);
    S5_slideIndex--;
    S5_showSlide(S5_slideIndex);
}

function S5_nextSlide(){
    S5_slideIndex++;
    S5_showSlide(S5_slideIndex);
}
