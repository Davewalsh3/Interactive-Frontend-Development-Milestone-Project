
// source : TraversyMedia youtube tutorial
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



// Autocomplete Search search //
// source https://www.codexworld.com/autocomplete-address-field-google-maps-javascript-api-places-library-jquery/ //

var searchInput = 'search_input';

$(document).ready(function () {
    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
        types: ['geocode'],
    });
	
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var near_place = autocomplete.getPlace();
        document.getElementById('loc_lat').value = near_place.geometry.location.lat();
        document.getElementById('loc_long').value = near_place.geometry.location.lng();
		
        document.getElementById('latitude_view').innerHTML = near_place.geometry.location.lat();
        document.getElementById('longitude_view').innerHTML = near_place.geometry.location.lng();
    });
});

(document).on('change', '#'+searchInput, function () {
    document.getElementById('latitude_input').value = '';
    document.getElementById('longitude_input').value = '';
	
    document.getElementById('latitude_view').innerHTML = '';
    document.getElementById('longitude_view').innerHTML = '';
});