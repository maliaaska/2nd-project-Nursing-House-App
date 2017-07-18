function startMap() {
  var BCN = {
  	lat: 41.384433,
  	lng: 2.176923};
    var map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 13,
      center: BCN
    });

  var infoWindow = new google.maps.InfoWindow();

  var NursingHome1 = new google.maps.Marker({
  position: {
  	lat: 41.392589,
    lng: 2.184317
  },
  map: map,
  title: "Grup Ballesol",
  description: "La residencia de ancianos Ballesol Almogávares está ubicado en la calle Almogávares de Barcelona y cuenta con rápidas y fáciles comunicaciones de transporte público tanto para las personas mayores como para sus familiares. Tiene una superficie total de 9.181 m2 con una capacidad de 194 plazas residenciales tanto para personas con plena autonomía como para personas en situación de dependencia física y/o psíquica."
  });

  NursingHome1.addListener("click", function(){
    console.log("hello");
  });

  // var infoWindow = new google.maps.infoWindow({
  //   content: "<b>This is Nursing house</b>"
  // });
  //
  // google.maps.event.addListener(NursingHome1, 'click', function() {
  //   infoWindow.open(map, NursingHome1);
  // });
  // google.maps.event.addListener(NursingHome1, 'click', function() {
  // infowindow.setContent(contentString + '<br>' + '<button class="btn btn-success"><a href="/users/' + response._id + '">Contact</a></button>');
  //               infowindow.open(map, this);
  //   });

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

  // var pin = new google.maps.Marker({ position, map });
  var nursingHomes = [NursingHome1, NursingHome2, NursingHome3, NursingHome4, NursingHome5, NursingHome6, NursingHome7];

  var homeFunction = function (item) {

    google.maps.event.addListener(item, 'click', function() {
      console.log(infoWindow);
      infoWindow.setContent(item.title);
      infoWindow.open(map, this);
    });
  };
  nursingHomes.forEach(homeFunction);
}



startMap();


//TEST
