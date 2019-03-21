var map = L.map('map').setView([19.432608, -99.133209], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



L.marker([19.8454, -90.5237]).addTo(map)
.bindPopup('marka uno')
.openPopup();



$(document).ready(function(){
    //getdeails será nuestra función para enviar la solicitud ajax
    $.getJSON( "https://vast-refuge-26463.herokuapp.com/api/oxxos/", { 
        	"id" : id, 
        	"name" : name, 
        	"colony": {
            	"id": idc,
            	"name": namec
        		},
        	"lat": lat,
        	"lng": lng,
        	"allday": allday,
        	"beer": beer,
        	"parking": parking });

    .done( function(data) {

    L.marker([data.lat, data.lng]).addTo(map)
	.bindPopup('data.name')
	.openPopup(
		data.namec, 
		if (allday==true) {
			"abierto todo el dia"
		} else	{
			"horario normal"

		}
		if (beer==true) {
			icon: {
			url: "img/beer.png",
			size: {width: 26, height: 32},
			origin: {x: 0, y: 0},
			anchor: {
				x: "-10px",
				y: "-32px"
				}
			}
		}
		if (parking==true) {
			"con estacionamiento"
		} else	{
			"sin estacionamiento"

		}




		);
	
	});

    }
    

  