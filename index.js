var map = L.map('map').setView([47.503737, 19.072531], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 50,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    referrerPolicy: 'no-referrer-when-downgrade'
}).addTo(map);

var modal = document.getElementById('image-modal');
var modalImg = document.getElementById('modal-img');

modal.addEventListener('click', function() {
    modal.style.display = 'none';
});

var szazalekosSzelesseg = window.innerWidth * 0.04; 
var szazalekosMagassag = szazalekosSzelesseg * 2;

//A tizennégy karátos autó
var auto = L.icon({
    iconUrl: 'A tizennégy karátos autó.jpg',
    iconSize: [szazalekosSzelesseg, szazalekosMagassag],
    iconAnchor: [szazalekosSzelesseg / 2, szazalekosMagassag],
    popupAnchor: [0, -szazalekosMagassag],
    className: 'terkep-keretes-kep'
});

L.marker([47.503737, 19.072531], { icon: auto })
    .addTo(map)
    .bindPopup("A tizennégy karátos autó", { closeButton: false })
    .on('mouseover', function () {
        this.openPopup();
    })
    .on('mouseout', function () {
        this.closePopup();
    })
    .on('click', function () {
        modalImg.src = 'A tizennégy karátos autó.jpg';
        modal.style.display = 'flex';
    });

//Dr. Bubó
var bubo = L.icon({
    iconUrl: 'Dr. Bubó.jpg',
    iconSize: [szazalekosSzelesseg, szazalekosMagassag],
    iconAnchor: [szazalekosSzelesseg / 2, szazalekosMagassag],
    popupAnchor: [0, -szazalekosMagassag],
    className: 'terkep-keretes-kep'
});

L.marker([47.517452, 19.088825], { icon: bubo })
    .addTo(map)
    .bindPopup("Dr. Bubó", { closeButton: false }) // 2. Hozzáadjuk a szöveget
    .on('mouseover', function () {
        this.openPopup();
    })
    .on('mouseout', function () {
        this.closePopup();
    })
    .on('click', function () {
        modalImg.src = 'Dr. Bubó.jpg';
        modal.style.display = 'flex';
    });

//Gyógyuló nyúl
var nyul = L.icon({
    iconUrl: 'Gyógyuló nyúl.jpg',
    iconSize: [szazalekosSzelesseg, szazalekosMagassag],
    iconAnchor: [szazalekosSzelesseg / 2, 0],
    popupAnchor: [0, -10],
    className: 'terkep-keretes-kep'
});

L.marker([47.517452, 19.088825], { icon: nyul })
    .addTo(map)
    .bindPopup("Gyógyuló nyúl", { closeButton: false }) // 2. Hozzáadjuk a szöveget
    .on('mouseover', function () {
        this.openPopup();
    })
    .on('mouseout', function () {
        this.closePopup();
    })
    .on('click', function () {
        modalImg.src = 'Gyógyuló nyúl.jpg';
        modal.style.display = 'flex';
    });    

//Micimackó
var micimacko = L.icon({
    iconUrl: 'Micimackó.jpg',
    iconSize: [szazalekosSzelesseg, szazalekosMagassag],
    iconAnchor: [szazalekosSzelesseg / 2, szazalekosMagassag],
    popupAnchor: [0, -szazalekosMagassag],
    className: 'terkep-keretes-kep'
});

L.marker([47.507782, 19.078732], { icon: micimacko })
    .addTo(map)
    .bindPopup("Micimackó", { closeButton: false }) // 2. Hozzáadjuk a szöveget
    .on('mouseover', function () {
        this.openPopup();
    })
    .on('mouseout', function () {
        this.closePopup();
    })
    .on('click', function () {
        modalImg.src = 'Micimackó.jpg';
        modal.style.display = 'flex';
    });

//Garfield
var garfield = L.icon({
    iconUrl: 'Garfield.jpg',
    iconSize: [szazalekosSzelesseg, szazalekosMagassag],
    iconAnchor: [szazalekosSzelesseg / 2, szazalekosMagassag],
    popupAnchor: [0, -szazalekosMagassag],
    className: 'terkep-keretes-kep'
});

L.marker([47.504377, 19.076051], { icon: garfield })
    .addTo(map)
    .bindPopup("Garfield", { closeButton: false }) // 2. Hozzáadjuk a szöveget
    .on('mouseover', function () {
        this.openPopup();
    })
    .on('mouseout', function () {
        this.closePopup();
    })
    .on('click', function () {
        modalImg.src = 'Garfield.jpg';
        modal.style.display = 'flex';
    });

//Búvár
var buvar = L.icon({
    iconUrl: 'Búvár.jpg',
    iconSize: [szazalekosSzelesseg, szazalekosMagassag],
    iconAnchor: [szazalekosSzelesseg / 2, szazalekosMagassag],
    popupAnchor: [0, -szazalekosMagassag],
    className: 'terkep-keretes-kep'
});

L.marker([47.498859, 19.070679], { icon: buvar })
    .addTo(map)
    .bindPopup("Búvár", { closeButton: false }) // 2. Hozzáadjuk a szöveget
    .on('mouseover', function () {
        this.openPopup();
    })
    .on('mouseout', function () {
        this.closePopup();
    })
    .on('click', function () {
        modalImg.src = 'Búvár.jpg';
        modal.style.display = 'flex';
    });

//Harry Houdini
var houdini = L.icon({
    iconUrl: 'Harry Houdini.jpg',
    iconSize: [szazalekosSzelesseg, szazalekosMagassag],
    iconAnchor: [szazalekosSzelesseg / 2, szazalekosMagassag],
    popupAnchor: [0, -szazalekosMagassag],
    className: 'terkep-keretes-kep'
});

L.marker([47.498924, 19.058037], { icon: houdini})
    .addTo(map)
    .bindPopup("Harry Houdini", { closeButton: false }) // 2. Hozzáadjuk a szöveget
    .on('mouseover', function () {
        this.openPopup();
    })
    .on('mouseout', function () {
        this.closePopup();
    })
    .on('click', function () {
        modalImg.src = 'Harry Houdini.jpg';
        modal.style.display = 'flex';
    });        