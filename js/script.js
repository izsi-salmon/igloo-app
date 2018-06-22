




// Start js



$(document).ready(function(){
    $('.datepickerHotelIn').pickadate({
        format: 'd/m/yyyy',
        min: 1,
        onSet: function(context) {
            var selectedDate = context;
            var date = new Date(selectedDate.select);
            console.log(date);
            if (date != 'Invalid Date'){
                var dayCheckIn = date.getDate();
                var monthCheckIn = date.getMonth();
                var yearCheckIn = date.getFullYear();
                $('.datepickerHotelOut').pickadate({
                    format: 'd/m/yyyy',
                    disable: [
                        true,
                        [2018, 10, 21, 'inverted'],
                        { from: new Date(yearCheckIn,monthCheckIn,(dayCheckIn+1)), to: 4 }
                    ]
                });
            }
            
        }
    });

    $("#filtreToggle").click(function(){
        $('.opts-fltr-ctnr').toggleClass('fltr-shut');
        $('.dropdown').toggleClass('dropup');
    });

    $('.btn-map').click(function(){
        $('#map').addClass('map-on');
        $('.btn-map').addClass('v-active');
        $('.vl').removeClass('v-active');
        $('.list-view').addClass('lv-translate');
    });

    $('.vl').click(function(){
        $('#map').removeClass('map-on');
        $('.btn-map').removeClass('v-active');
        $('.vl').addClass('v-active');
        $('.list-view').removeClass('lv-translate');
    });
});

mapboxgl.accessToken = 'pk.eyJ1IjoiaXpzaSIsImEiOiJjamkzbjQxMWQwMGFzM2tvNDM5NTB6cmlrIn0.a5L-XDDBNFQ-0BrqtQpNCg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [168.697751, -45.026377], // starting position [lng, lat]
    zoom: 11 // starting zoom
});