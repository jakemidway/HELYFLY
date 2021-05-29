// проверяет поддерживает ли браузер webp
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});



/*-------------------------------------------ПРОКРУТКА ПО ЯЯКАРЯМ------------------------------------------------------------------------------------------*/
let anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        let blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    });
}


// slider for gallery
let countSlider = 0;

const btnSlidePrev = document.querySelector('#Btn-slide-prev');
const btnSlideNext = document.querySelector('#Btn-slide-next');

let slider = document.querySelector('.gallery__slider');
let slides = document.getElementsByClassName('gallery__slide');
let widthSlide = slides[0].offsetWidth;
let widthSlider =  widthSlide * slides.length;
slider.style.width = widthSlider + 'px';
console.log(slider)





function visibelSlide(countSlider){
    // sliders[countSlider].style.display="block";
}
btnSlideNext.onclick = function(countSlider){
   
}
btnSlidePrev.onclick = function(){
    
}

visibelSlide(countSlider);






