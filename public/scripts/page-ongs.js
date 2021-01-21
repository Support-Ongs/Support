const map = L.map('mapid').setView([-7.0814585,-41.4352178], 17);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
).addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker2.png",
    iconSize: [68,78],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent('Fazenda da Esperança  <a href="ong.html?id=1" class="choose-ongs"> <img src="./public/images/arrow-white.svg"> </a>')

L
  .marker([-7.0814585,-41.4352178],{icon})
  .addTo(map)
  .bindPopup(popup)
