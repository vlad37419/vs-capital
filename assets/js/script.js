

document.addEventListener("DOMContentLoaded", function () {
    let wrapper = document.querySelector('.wrapper');

    // let mainSlider = new Swiper('.main', {
    //     wrapperClass: 'main__wrapper',
    //     slideClass: 'main__section',

    //     preventInteractionOnTransition: true,
    //     direction: 'vertical',
    //     slidesPerView: 'auto',
    //     parallax: true,
    //     resistance: false,
    //     touchMoveStopPropagation: false,
    //     touchReleaseOnEdges: true,

    //     keyboard: {
    //         enabled: true,
    //         onlyInViewport: true,
    //         pageUpDown: true,
    //     },

    //     mousewheel: {
    //         sensitivity: .8,
    //     },

    //     watchOverflow: true,

    //     speed: 800,

    //     observer: true,

    //     observeParents: true,

    //     observeSlideChildren: true,

    //     scrollbar: {
    //         el: '.main__scroll',
    //         dragClass: 'main__drag-scroll',
    //         draggable: false,
    //     },

    //     init: false,

    //     on: {
    //         init: function () {
    //             setScrollType();
    //             wrapper.classList.add('_loaded');
    //         },
    //         resize: function () {
    //             setScrollType();
    //         },
    //         slideChange: function () {
    //             animOnScroll();
    //         },
    //     },
    // });

    // function setScrollType() {
    //     if (wrapper.classList.contains('_free')) {
    //         wrapper.classList.remove('_free');
    //         mainSlider.params.freeMode.enabled = false;
    //         mainSlider.params.preventInteractionOnTransition = true;
    //         mainSlider.params.speed = 800;
    //         mainSlider.params.resistanceRatio = 0.85;
    //     }

    //     for (let i = 0; i < mainSlider.slides.length; i++) {
    //         const mainSlide = mainSlider.slides[i];
    //         const mainSlideContent = mainSlide.querySelector('.section__content');

    //         if (mainSlideContent) {
    //             const mainSlideContentHeight = mainSlideContent.offsetHeight;
    //             if (mainSlideContentHeight > window.innerHeight) {
    //                 wrapper.classList.add('_free');
    //                 mainSlider.params.freeMode.enabled = true;
    //                 mainSlider.params.preventInteractionOnTransition = false;
    //                 mainSlider.params.speed = 100;
    //                 mainSlider.params.resistanceRatio = 0;
    //                 break;
    //             }
    //         }
    //     }
    // }

    // Анимация при скролле
    const animItems = document.querySelectorAll('.anim-item');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);

        function animOnScroll() {
            for (let i = 0; i < animItems.length; i++) {
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 2;

                let animItemPoint = window.innerHeight - animItemHeight / animStart;
                if (animItemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('current');
                } else {
                    animItem.classList.remove('current');
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
    }

    animOnScroll();

    // mainSlider.init();

    animOnScroll();
});
