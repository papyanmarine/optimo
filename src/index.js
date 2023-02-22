
let result = document.querySelector('.result-title')
let project = document.querySelector('.project-title');
let marketingTitle = document.querySelectorAll('.marketing-title');

let plusTitle = document.querySelector('.plus-title');

let partnersTitle = document.querySelector('.partners-title');

let brandTitle = document.querySelectorAll('.brand-title');

let sertificateTitle = document.querySelector('.sertificate-title');

let espertize = document.querySelectorAll('.espertize-title');

let auditTitle = document.querySelectorAll('.audit-title');

let  contactTitle = document.querySelector('.contact-title');


let marketing = document.querySelector('.marketing');
let marketingItem = document.querySelectorAll('.marketing-item');
let ArrowItem = document.querySelectorAll('.arrows div');
let menu = document.querySelector('.menu');

window.addEventListener('scroll', function () {
    if (scrollY > menu.offsetTop) {
        menu.classList.add('fixed-menu');
    }else{
        menu.classList.remove('fixed-menu'); 
    }
    if (scrollY < result.offsetTop) {
        result.classList.add('title-anim');
    }
    if (scrollY < project.offsetTop & scrollY > document.querySelector('.result').offsetTop) {
        project.classList.add('title-anim');
    }
    if (scrollY < document.querySelector('.marketing-title-block').offsetTop & scrollY > document.querySelector('.quality').offsetTop){
        for (const el of marketingTitle) {
            el.classList.add('title-anim');
        }
    }
    if (scrollY < plusTitle.offsetTop & scrollY > document.querySelector('.marketing').offsetTop) {
        plusTitle.classList.add('title-anim');
    }
    if (scrollY < partnersTitle.offsetTop & scrollY > document.querySelector('.marketing').offsetTop) {
        partnersTitle.querySelector('.partners-title h2').classList.add('title-anim');
    }
    if (scrollY < document.querySelector('.brand-title-block').offsetTop & scrollY > document.querySelector('.history').offsetTop) {
        for (const el of brandTitle) {
            el.classList.add('title-anim');
        }
    }
    if (scrollY < sertificateTitle.offsetTop & scrollY > document.querySelector('.brand').offsetTop) {
        sertificateTitle.classList.add('title-anim');
    }
    if (scrollY < document.querySelector('.espertize-title-block').offsetTop & scrollY > document.querySelector('.sertificate').offsetTop) {
        for (const el of espertize) {
            el.classList.add('title-anim');
        }
    }
    if (scrollY < document.querySelector('.audit-title-block').offsetTop & scrollY > document.querySelector('.espertize-content').offsetTop) {
        for (const el of auditTitle) {
            el.classList.add('title-anim');
        }
    }
    if (scrollY < contactTitle.offsetTop & scrollY > document.querySelector('.audit').offsetTop) {
        contactTitle.classList.add('title-anim');
    }

    if (scrollY < marketing.offsetTop & scrollY > document.querySelector('.quality').offsetTop) {
        for (let i = 0; i < marketingItem.length; i++) {
            marketingItem[0].classList.add('item1-anim');
            marketingItem[1].classList.add('item2-anim');
            marketingItem[2].classList.add('item3-anim');
            marketingItem[3].classList.add('item4-anim');
            marketingItem[4].classList.add('item5-anim');
            marketingItem[5].classList.add('item6-anim');
        }
        for (let i = 0; i < ArrowItem.length; i++) {
            ArrowItem[0].classList.add('arrow1-anim');
            ArrowItem[1].classList.add('arrow2-anim');
            ArrowItem[2].classList.add('arrow3-anim');
            ArrowItem[3].classList.add('arrow4-anim');
            ArrowItem[4].classList.add('arrow5-anim');
            ArrowItem[5].classList.add('arrow6-anim');
        }
    }
})

let prewBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');
let historySlider = document.querySelector('.history-slider');
let sliderWrap = document.querySelector('.history-slider-wrap');
let sliderItems = document.querySelectorAll('.history-slide');

let brandWrap = document.querySelector('.brand-wrap');
let brandSlide = document.querySelector('.slide');
let brandSlideItem = document.querySelectorAll('.slide-item');
let brandPrewBtn = document.querySelector('#brand-left-btn');
let brandNextBtn = document.querySelector('#brand-right-btn');


let position = 0; // nachalnaya posiciya
let toScroll = 1; // skolko el skrolit
/*
let slidesWidth = slideWidth(historySlider.offsetWidth) / toShow(3);
let movePosition = toScroll * slidesWidth; // na skolko nado proskrolit*/


function toShow (show) {
    return show
};
function slideWidth (width){
    return width
} // skolko vidno
function prevSlide(offsetWidth, show, slide) {
    let slidesWidth = slideWidth(offsetWidth) / toShow(show);
    let movePosition = toScroll * slidesWidth; // na skolko nado proskrolit
    if (position === 0) {
        position += position * slidesWidth
    } else{
        position += movePosition;
    }
    slideMove(slide);
}
function nextSlide(offsetWidth, show, slide, items) {
    let slidesWidth = slideWidth(offsetWidth) / toShow(show);
    let movePosition = toScroll * slidesWidth; // na skolko nado proskrolit
    let itemLeft = 
        items.length - (Math.abs(position) + toShow(show) * slidesWidth) / slidesWidth;// na sskolko prokrucheno
    if(position <= -(items.length - toShow(show)) * slidesWidth & itemLeft <= toScroll){
        position -=  itemLeft * slidesWidth;
    }
    else{
        position -=  movePosition
    }
    slideMove(slide);
}
function slideMove(slide) {
    slide.style.transform = `translate(${position}px, 0)`;
}

prewBtn.addEventListener('click', function () {
    prevSlide(historySlider.offsetWidth, 3, sliderWrap)
});
nextBtn.addEventListener('click', function () {
    nextSlide(historySlider.offsetWidth, 3, sliderWrap, sliderItems)
    
});
document.querySelector('#slide-length').innerHTML = '/' + brandSlideItem.length;
let numBlock =  document.querySelector('#num');
let plusCount = 1;
let minusCount = brandSlideItem.length;

brandPrewBtn.onclick =  function () {
    prevSlide(brandWrap.offsetWidth, 1, brandSlide);
    minusCount = numBlock.innerHTML;
    minusCount--;
    if (minusCount <= 1) {
        minusCount = 1;
    }
    numBlock.innerHTML = minusCount;
};

brandNextBtn.onclick = function () {
    nextSlide(brandWrap.offsetWidth, 1, brandSlide, brandSlideItem);
    plusCount = numBlock.innerHTML;
    plusCount++;
    if (plusCount >= brandSlideItem.length) {
        plusCount = brandSlideItem.length;
    }
    numBlock.innerHTML = plusCount;
};


let contactBtn = document.querySelector('.contact-btn');
let closePopupBtn = document.querySelector('.close-popup');


contactBtn.addEventListener('click', function () {
    document.querySelector('.popup-bg').style.display = 'block'
})
closePopupBtn.addEventListener('click', function () {
    document.querySelector('.popup-bg').style.display = 'none'
});


let strategyContentList = document.querySelectorAll('.strategy-content');
let listItemBtn = document.querySelectorAll('.list-item');

for (const item of listItemBtn) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        for (const elem of strategyContentList) {
            if (item.getAttribute('id') !== elem.dataset.id ) {
                elem.style.display = 'none';
            } else{
                elem.style.display = 'block';
            }
        }
        for (let i = 0; i < listItemBtn.length; i++) {
            listItemBtn[i].classList.remove('active-top');
            listItemBtn[i].querySelector('a').classList.remove('active-bottom');
         }
         item.classList.add('active-top');
         item.querySelector('a').classList.add('active-bottom');
    })
}

let videoOpenBtn = document.querySelector('.video-popup-btn');
let videoCloseBtn =  document.querySelector('.video-close');
let videoPopup = document.querySelector('.video-popup-container');
let iframe = document.querySelector('#iframe-video');

videoOpenBtn.addEventListener('click', function () {
    videoPopup.style.display = 'block';
    iframe.src = 'https://www.youtube.com/embed/IuOr475kgOg?autoplay=1'

})
videoCloseBtn.addEventListener('click', function () {
    videoPopup.style.display = 'none';
    iframe.src = '';
})