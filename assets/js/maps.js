

function initMap(){
      // Map options
      var options = {
        zoom:6,
        center:{lat:53.270962,lng:-9.062691},
        iconImage:'https://maps.google.com/mapfiles/kml/shapes/sunny.png'
      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);

     
      // Add marker
      var marker = new google.maps.Marker({
        position:{lat:53.350140,lng:-6.266155},
        map:map,
        
        
      });

       var infoWindow = new google.maps.InfoWindow({
        content:'<h1>Athens, Greece</h1>'
      });
       marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });

      addMarker({
          coords:{lat:53.270962,lng:-9.062691},
          iconImage:'https://maps.google.com/mapfiles/kml/shapes/sunny.png',
        content:'<h1> Galway, Ireland  </h1>'
        });

      addMarker({
          coords:{lat:23.634501,lng:-102.552788},
          iconImage:'https://maps.google.com/mapfiles/kml/shapes/sunny.png',
          content:'<h1> Mexico City, Mexico  </h1>'
        });
      addMarker({
          coords:{lat:40.416775,lng:-3.703790},
        iconImage:'https://maps.google.com/mapfiles/kml/shapes/sunny.png',
        content:'<h1> Madrid, Spain </h1>'
        });
      addMarker({
          coords:{lat:40.712776,lng:-74.00597},
          iconImage:'https://maps.google.com/mapfiles/kml/shapes/sunny.png',
          content:'<h1> Park Row, New York, NY 10007 </h1>'

        });
      addMarker({
          coords:{lat: 53.349804,lng:-6.260310},
        iconImage:'https://maps.google.com/mapfiles/kml/shapes/sunny.png',
        content:'<h1> O Connell Street, Palatine Square, Dublin </h1>'
      });
      addMarker({
          coords:{lat:-15.826691,lng:-47.921822},
        iconImage:'https://maps.google.com/mapfiles/kml/shapes/sunny.png',
        content:'<h1> Brasília Brasil</h1>'
        });
        addMarker({
          coords:{lat:37.983810,lng:23.727539},
        iconImage:'https://maps.google.com/mapfiles/kml/shapes/sunny.png',
        content:'<h1> Athens, Greece </h1>'
        });

      // Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
           
        });

        //check for custom icon
        if(props.iconImage){
            //set icon image
            marker.setIcon(props.iconImage);
        }

        //check content
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });
       marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
        }      
    }
}






/*-------------------------------------------------------------------------------------------

Trial & Error Maps //



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

-----------------------------------------------------------------------------------------------------------------------------------------------------------

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
    }
*/