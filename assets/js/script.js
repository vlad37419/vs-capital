document.addEventListener("DOMContentLoaded", function () {
    let wrapper = document.querySelector('.wrapper');

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

    const mainSection = document.querySelectorAll('.main__section');

    function addCssTopForStickyBlock () {
        if (mainSection.length > 0) {
            for (let i = 0; i < mainSection.length; i += 1) {
                let section = mainSection[i];
                let sectionHeight = section.offsetHeight;
                let windowHeight = document.documentElement.clientHeight;
                let sectionStyleTop = windowHeight - sectionHeight;

                section.style.top = `${sectionStyleTop}px`;
            }
        }
    }

    window.onresize = function() {
        addCssTopForStickyBlock();
    };
    
    animOnScroll();

    setTimeout(addCssTopForStickyBlock(), 1000);
});
