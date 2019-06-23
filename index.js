// set up map
/////////////////////

const stadiumMap = L.map('stadium-map').setView([37.0902, -95.7129], 4);
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution : '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(stadiumMap);


// add stadiums to map
//////////////////////

const yankeeStadium = L.marker([40.8296, -73.9262]).addTo(stadiumMap);
yankeeStadium.bindPopup(`
  <h1>Yankee Stadium</h1>
  <img src="images/yankee-stadium.jpg" />
  <p><strong>The good:</strong> Lorem ipsum dolor sit amet</p>
  <p><strong>The bad:</strong> Excepteur sint occaecat cupidatat non proident</p>
`);

const fenwayPark = L.marker([42.3467, -71.0972]).addTo(stadiumMap);
fenwayPark.bindPopup(`
  <h1>Fenway Park</h1>
  <p><strong>The good:</strong> Lorem ipsum dolor sit amet</p>
  <p><strong>The bad:</strong> Excepteur sint occaecat cupidatat non proident</p>
`);

const pncPark = L.marker([40.4469, -80.0057]).addTo(stadiumMap);
pncPark.bindPopup(`
  <h1>PNC Park</h1>
  <p><strong>The good:</strong> Lorem ipsum dolor sit amet</p>
  <p><strong>The bad:</strong> Excepteur sint occaecat cupidatat non proident</p>
`);

