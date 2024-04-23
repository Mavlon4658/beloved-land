let homeSwiper = new Swiper('.home__slider .swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".home__slider .swiper_btn_next",
        prevEl: ".home__slider .swiper_btn_prev"
    },
    pagination: {
        el: ".home__slider .swiper_pagination",
        clickable: true,
    }
})

let exclLocSwipers = document.querySelectorAll('.excl_loc .card_slider .swiper');
if (exclLocSwipers.length) {
    exclLocSwipers.forEach(el => {
        let swp = new Swiper(el, {
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: el.querySelector(".swiper_btn_next"),
                prevEl: el.querySelector(".swiper_btn_prev")
            },
            pagination: {
                el: el.querySelector(".swiper_pagination"),
                clickable: true,
            }
        })
    })
}

let areaMapSwp = new Swiper('.area_map .card_body', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".area_map .card_body .swiper_btn_next",
        prevEl: ".area_map .card_body .swiper_btn_prev"
    },
    pagination: {
        el: ".area_map .card_body .swiper_pagination",
        clickable: true,
    }
})

let reviewSwiper = new Swiper('.review .swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        1650: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
    navigation: {
        nextEl: ".review .swp_btn_next",
        prevEl: ".review .swp_btn_prev"
    },
    pagination: {
        el: ".review .swiper_pagination",
        clickable: true,
    }
})

let atmosphereSwiper = new Swiper('.atmosphere .swiper', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".atmosphere .swp_btn_next",
        prevEl: ".atmosphere .swp_btn_prev"
    },
    pagination: {
        el: ".atmosphere .swiper_pagination",
        clickable: true,
    }
})

let newsSwiper = new Swiper('.news .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1450: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 2,
        },
    },
    loop: true,
    navigation: {
        nextEl: ".news .swp_btn_next",
        prevEl: ".news .swp_btn_prev"
    },
    pagination: {
        el: ".news .swiper_pagination",
        clickable: true,
    }
})

let areaSelectOpen = document.querySelector('.area .select_open')
    areaSelect = document.querySelector('.area .select_wrap')

if (areaSelectOpen) {
    areaSelectOpen.onclick = () => {
        areaSelect.classList.toggle('active')
    }
}

let bars = document.querySelector('.header .bars'),
    mobileMenu = document.querySelector('.mobile_menu'),
    mobileMenuClose = document.querySelector('.mobile_menu__close');

bars.onclick = () => {
    mobileMenu.classList.add('active');
    bodyHidden();
}

mobileMenuClose.onclick = () => {
    mobileMenu.classList.remove('active');
    bodyVisible();
}

function bodyHidden () {
    document.querySelector('body').style.overflow = 'hidden'
}

function bodyVisible () {
    document.querySelector('body').style.overflow = 'visible'
}