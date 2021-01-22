
const options={
  dragging: false,
  touchZoom: false,
  doubleClickZoom:false,
  scrollWheelZoom: false,
  zoomControl:false
}
const map = L.map('mapid',options).setView([-7.0814585,-41.4352178], 17);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
).addTo(map);

const icon = L.icon({
    iconUrl: "./public/images/map-marker2.png",
    iconSize: [68,78],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

L
  .marker([-7.0814585,-41.4352178],{icon})
  .addTo(map)
  .bindPopup(popup)
