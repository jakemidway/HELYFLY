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

let container = document.querySelector('.container');

console.log(container.offsetWidth);




let slider = document.querySelector('.gallery__slider');
let slides = document.getElementsByClassName('gallery__slide');
let widthSlide = slides[0].offsetWidth;
let widthSlider = widthSlide * slides.length + (15 * (slides.length - 1));



let positionSliderX = 0;
slider.style.width = widthSlider + 'px';


// console.log(widthSlider);
// console.log(slides.length);
// console.log('длинна слайдера с отступамми ' + widthSlider);

function visibelSlide(countSlider) {
    // sliders[countSlider].style.display="block";
}
btnSlideNext.onclick = function (countSlider) {

    if (-positionSliderX + container.offsetWidth < widthSlider) {
        positionSliderX = positionSliderX - Math.round(widthSlider / slides.length);
        slider.style.transform = 'translate(' + positionSliderX + 'px)';     
    }
    console.log( 'длинна слайдер линии ' + widthSlider);
    console.log( 'посишон по иксу левого края ' + positionSliderX);
    console.log( 'ширина контайнера ' + container.offsetWidth);
}


btnSlidePrev.onclick = function () {

    if (positionSliderX < 0) {
        positionSliderX = positionSliderX + Math.round(widthSlider / slides.length);
        slider.style.transform = 'translate(' + positionSliderX + 'px)';
        
    }
    
    console.log( 'посишон по иксу левого края ' + positionSliderX);
}

visibelSlide(countSlider);


// кнопка Показать все фото

const btnShowFoto = document.querySelector('.gallery__btn-show');


let gridItemsHidden = document.querySelectorAll('.gallery__item-grid_hidden');
let galleryArr = document.querySelectorAll('.gallery__arr')
let deg = 0;

btnShowFoto.onclick = function () {
    for (let item of gridItemsHidden){
        item.classList.toggle('gallery__item-grid_hidden')
    }
    deg = deg + 180;
    for (let arr of galleryArr){
        
        arr.style.transform = 'rotate(' + deg + 'deg)';
    }
    
}



// sider for map

const mapBtnSlidePrev = document.querySelector('.map__btn_prev');
const mapBtnSlideNext = document.querySelector('.map__btn_next');

let mapItems = document.querySelectorAll('.map__slide-item');
let countMapSlider = 0;

function toggleItemAct(i) {
    mapItems[i].classList.toggle('map__slide-item_active');
}
function cleanItemAct() {
    for (let item of mapItems){
        if (item.classList == 'map__slide-item map__slide-item_active'){
            item.classList.toggle('map__slide-item_active')
        }   
    }
}


mapBtnSlideNext.onclick = function () {
    
    if (countMapSlider < mapItems.length - 1){
        countMapSlider++;  
    }else{
        countMapSlider = 0;
        
    }
    
    
    
    cleanItemAct()
    toggleItemAct(countMapSlider)

}

mapBtnSlidePrev.onclick = function () {
    if (countMapSlider > 0){
        countMapSlider--;
    }else{
        countMapSlider = mapItems.length - 1;
    }
    
    cleanItemAct()
    toggleItemAct(countMapSlider)
}



