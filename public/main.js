function startMap() {
  var BCN = {
  	lat: 41.384433,
  	lng: 2.176923};
  var map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 13,
      center: BCN
    }
  );
  var NursingHome1 = new google.maps.Marker({
  position: {
  	lat: 41.394421,
  	lng: 2.176097
  },
  map: map,
  title: "I'm here"
});
var NursingHome2 = new google.maps.Marker({
position: {
  lat: 41.395513,
  lng: 2.187789
},
map: map,
title: "Residencia La Trobada"
});

var NursingHome3 = new google.maps.Marker({
position: {
  lat: 41.391931,
  lng: 2.170988
},
map: map,
title: "Residéncia La Comtal - Group Gran"
});

var NursingHome4 = new google.maps.Marker({
position: {
  lat: 41.413629,
  lng: 2.156834
},
map: map,
title: "SARquavitae Residencia de ancianos La Salut Josep Servat"
});
var NursingHome5 = new google.maps.Marker({
position: {
  lat: 41.395279,
  lng: 2.147650
},
map: map,
title: "Persohome"
});

var NursingHome6 = new google.maps.Marker({
position: {
  lat: 41.396116,
  lng: 2.176575
},
map: map,
title: "Residència Geriàtrica Roger de Flor"
});

var NursingHome7 = new google.maps.Marker({
position: {
  lat: 41.404035,
  lng: 2.195458
},
map: map,
title: "Residència de Gent Gran Amma Diagonal"
});
}

startMap();
