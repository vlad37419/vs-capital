let wrapper = document.querySelector('.wrapper');

let mainSlider = new Swiper('.main', {
    wrapperClass: 'main__wrapper',
    slideClass: 'main__section',

    direction: 'vertical',
    slidesPerView: 'auto',
    parallax: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    watchOverflow: true,

    speed: 800,

    observer: true,

    observeParents: true,

    observeSlideChildren: true,

    scrollbar: {
        el: '.main__scroll',
        dragClass: 'main__drag-scroll',
        draggable: false,
    },

    init: false,

    on: {
        init: function () {
            setScrollType();
            wrapper.classList.add('_loaded');
        },
        resize: function () {
            setScrollType();
        },
    },
});

function setScrollType() {
    if (wrapper.classList.contains('_free')) {
        wrapper.classList.remove('_free');
        mainSlider.params.freeMode.enabled = false;
    }

    for (let i = 0; i < mainSlider.slides.length; i++) {
        const mainSlide = mainSlider.slides[i];
        const mainSlideContent = mainSlide.querySelector('.section__content');

        if (mainSlideContent) {
            const mainSlideContentHeight = mainSlideContent.offsetHeight;
            if (mainSlideContentHeight > window.innerHeight) {
                wrapper.classList.add('_free');
                mainSlider.params.freeMode.enabled = true;
                break;
            }
        }
    }

    

}

mainSlider.init();