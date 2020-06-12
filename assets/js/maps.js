
 
 function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.BOTTOM].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }




      /*-----------------------PREVIOUS MAP JS CODE / MAY NEED TO SELECT CODE LATER -----

      function initialize() {
  initMap();
  initAutocomplete();
}
// source : TraversyMedia youtube tutorial
function initMap(){
      // Map options
      var options = {
        
        center:
        {lat:53.270962,
            lng:-9.062691},
            zoom:6,
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
*/