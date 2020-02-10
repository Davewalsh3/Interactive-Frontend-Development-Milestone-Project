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