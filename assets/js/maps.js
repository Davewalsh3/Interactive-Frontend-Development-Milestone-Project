/*------
//some code sourced from https://stackoverflow.com/questions/49714599/google-map-with-multiple-locations-in-html-using-javascript-on-button-click-how //
 // https://developers.google.com/maps/documentation/javascript/places-autocomplete //
 var map;
function initialize()
{
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(48.1293954,12.556663),//Setting Initial Position
    zoom: 9.5
  });
}



google.maps.event.addDomListener(window, 'load', initialize);
//error on some browsers

//Setting Location with jQuery
$(document).ready(function ()
{
    
});
----*/
 function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 53.3498, lng: 6.2603},
          zoom: 12.5,
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

        function newLocation(newLat,newLng)
        {
	        map.setCenter({
		        lat : newLat,
		        lng : newLng
            });
            map.setZoom(12.5);


        }
         $("#b1").on('click', function ()
    {
	  newLocation(34.992283,34.014011);
	});
  
	$("#b2").on('click', function ()
    {
	  newLocation(21.1619,-86.8515);
	});
  
    $("#b3").on('click', function ()
    {
	  newLocation(41.3828939,2.1774322);
    });
    $("#b4").on('click', function ()
    {
	  newLocation(25.7617,-80.1918);
    });
    $("#b5").on('click', function ()
    {
	  newLocation(53.3498,-6.2603);
    });
    $("#b6").on('click', function ()
    {
	  newLocation(-22.9110137,-43.2093727);
	});
    }
    


    // Is my google maps api key script formatcorrect?
    //Should there be a callback there? or are my functions being called by the JS file?
    // Do I need to initialize the map with google.maps.event.addDomListener(window, 'load', initialize);? is it already being initialized?
    //How can I make both these functions work on my map at the same time? Does one need slot into the other somewhere or
    // am I repeating things that need only one instance? i.e callbacks, initializing functions.. 