const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numSlides = slides.length;
let slideNum = 0;

// Slider next button 
nextBtn.onclick = () => {
    slides.forEach((slide) =>{
        slide.classList.remove('active');
    });

    slideNum++;

    if(slideNum > (numSlides -1)){
        slideNum = 0;
    }

    slides[slideNum].classList.add('active');
}

// Slider prev button 
prevBtn.onclick = () => {
    slides.forEach((slide) =>{
        slide.classList.remove('active');
    });

    slideNum--;

    if(slideNum < 0){
        slideNum = numSlides -1;
    }

    slides[slideNum].classList.add('active'); 
}