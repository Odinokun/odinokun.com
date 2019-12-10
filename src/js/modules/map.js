module.exports = function () {

  // begin map
  function initialize() {
    const mapDiv = document.getElementById("contacts-map");

    map = new google.maps.Map(mapDiv, {
      maxZoom: 18,
      minZoom: 3,
      zoom: 14,
      disableDefaultUI: false,
      center: {lat: 50.456219, lng: 30.540762},
      styles: [
        {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "simplified"
            },
            {
              "color": "#fcfcfc"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "simplified"
            },
            {
              "color": "#fcfcfc"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "simplified"
            },
            {
              "color": "#dddddd"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "simplified"
            },
            {
              "color": "#dddddd"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "simplified"
            },
            {
              "color": "#eeeeee"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "simplified"
            },
            {
              "color": "#dddddd"
            }
          ]
        }
      ]
    });
  }

  const contactsMap = document.getElementById('contacts-map');
  if (contactsMap) {
    google.maps.event.addDomListener(window, "load", initialize);
  }
  // end map

};