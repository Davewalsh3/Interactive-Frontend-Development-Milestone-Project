

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3.5,
        center: {
            lat: 53.273800,
            lng: -9.051780
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 37.983810, lng: 23.727539 },
        { lat: 23.634501, lng: -102.552788 },
        { lat: 40.416775, lng: -3.703790},
        { lat: 40.712776, lng: -74.00597},
        { lat: 53.349804, lng: -6.260310},
        { lat: -15.826691, lng: -47.921822}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}



/*-------------------------------------------------

var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 53.273800, lng: -9.051780},
          zoom: 3.5,
        });

 var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var locations = [
        { lat: 37.983810, lng: 23.727539 },
        { lat: 23.634501, lng: -102.552788 },
        { lat: 40.416775, lng: -3.703790},
        { lat: 40.712776, lng: -74.00597},
        { lat: 53.349804, lng: -6.260310},
        { lat: -15.826691, lng: -47.921822}
    ];
   var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

  var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

        
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }







/*------------------------------------------------------------------------




function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [{
                lat: 37.088990,
                lng: -8.252280 
            }, {
                lat: 41.076680,
                lng: 1.144500
            }, {
                lat:28.538336 ,
                lng:-81.379234 
            }, {
                lat: 49.300522,
                lng:-124.253601 
            },{
                lat: 28.863770,
                lng: -13.846420
            }];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }


        ---------*/