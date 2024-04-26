

// Map 2
function init1 () {
    const map = new ymaps.Map('map-1', {
        center: [55.24981097954052,37.753837534909124],
        zoom: 15,
        controls: []
    });

    let placemark = [
        new ymaps.Placemark([55.24176914865566,37.749417254452574], {}, {
            iconLayout: 'default#image',
            iconImageHref: './images/mark.svg',
            iconImageSize: [66.67, 83.33],
            iconImageOffset: [-33, -83]
        }),
        new ymaps.Placemark([55.24449080482076,37.74694962215887], {}, {
            iconLayout: 'default#image',
            iconImageHref: './images/mark.svg',
            iconImageSize: [66.67, 83.33],
            iconImageOffset: [-33, -83]
        }),
        new ymaps.Placemark([55.24480954510336,37.75049013805854], {}, {
            iconLayout: 'default#image',
            iconImageHref: './images/mark.svg',
            iconImageSize: [66.67, 83.33],
            iconImageOffset: [-33, -83]
        }),
        new ymaps.Placemark([55.24672193289917,37.752635905270445], {}, {
            iconLayout: 'default#image',
            iconImageHref: './images/mark.svg',
            iconImageSize: [66.67, 83.33],
            iconImageOffset: [-33, -83]
        }),
        new ymaps.Placemark([55.24331389538892,37.75443834972846], {}, {
            iconLayout: 'default#image',
            iconImageHref: './images/mark.svg',
            iconImageSize: [66.67, 83.33],
            iconImageOffset: [-33, -83]
        }),
        new ymaps.Placemark([55.24520183731231,37.75924486828314], {
            balloonContentHeader: `
            <div class="card_head">
                <p class="text-p1">Коттеджный поселок</p>
                <h3 class="text-h2">Юсупово</h3>
                <p class="text-p1">от 460 000 ₽/ сотка</p>
            </div>
            `,
            balloonContent: `
            <div class="swiper card_body">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="./images/map_card_1.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="./images/map_card_1.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="./images/map_card_1.jpg" alt="">
                    </div>
                </div>

                <div class="swiper_btn">
                    <button class="swiper_btn_prev">
                        <img src="./images/swp_btn_prev_3.svg" alt="">
                    </button>
                    <button class="swiper_btn_next">
                        <img src="./images/swp_btn_next_3.svg" alt="">
                    </button>
                </div>

                <div class="swiper_pagination"></div>
            </div>
            `,
            balloonContentFooter: `<a href="#" class="btn_brown text-btn card_foot">Подробнее</a>`,
        }, {
            iconLayout: 'default#image',
            iconImageHref: './images/mark.svg',
            iconImageSize: [66.67, 83.33],
            iconImageOffset: [-33, -83]
        }),
    ];

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');

    placemark.forEach(mark => {
        map.geoObjects.add(mark);
    })

    placemark[5].balloon.open();
}

if (document.querySelector('#map-1')) {
    ymaps.ready(init1)
}
// Map 2 end

// Map 2
function init2 () {
    const map = new ymaps.Map('map-2', {
        center: [55.24463791603935,37.750769087796066],
        zoom: 15,
        controls: []
    });

    let placemark = new ymaps.Placemark([55.24029790524677,37.754459807400565], {}, {
		iconLayout: 'default#image',
		iconImageHref: './images/mark.svg',
		iconImageSize: [66.67, 83.33],
		iconImageOffset: [-33, -83]
	});

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');

    map.geoObjects.add(placemark);
}

if (document.querySelector('#map-2')) {
    ymaps.ready(init2)
}
// Map 2 end

// Map 3
function init3 () {
    const map = new ymaps.Map('map-3', {
        center: [55.24463791603935,37.750769087796066],
        zoom: 15,
        controls: []
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');
}

if (document.querySelector('#map-3')) {
    ymaps.ready(init3)
}
// Map 3 end