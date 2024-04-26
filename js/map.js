// function init () {
//     const map = new ymaps.Map('map-demo', {
//         center: [37.64, 55.76],
//         zoom: 10,
//         // type: 'yandex#satellite',
//         // Карта будет создана без
//         // элементов управления.
//         controls: []
//     });
// }

// ymaps.ready(init)

// Map 3
function init2 () {
    const map = new ymaps.Map('map-2', {
        center: [55.24463791603935,37.750769087796066],
        zoom: 15,
        controls: []
    });

    let placemark = new ymaps.Placemark([55.24463791603935,37.750769087796066], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://image.flaticon.com/icons/png/512/64/64113.png',
		iconImageSize: [66.67, 83.33],
		iconImageOffset: [-19, -44]
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
// Map 3 end

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