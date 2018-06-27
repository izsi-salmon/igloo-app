

// Start js
$(document).ready(function(){
    
    // Data variables
    var config = {};
    var hotelObj = accomodation.hotel;
    var hostelObj = accomodation.hostel;
    var houseObj = accomodation.house;
    var motelObj = accomodation.motel;
    
    // Input variables
    var checkInInput =  document.getElementsByClassName('check-in');
    var checkOutInput = document.getElementsByClassName('check-out');
    var adultInput =    document.getElementsByClassName('inputAdult');
    var childInput =    document.getElementsByClassName('inputChild');
    var nameInput =     document.getElementsByClassName('input-name');
    var emailInput =    document.getElementsByClassName('input-email');
    var breakfastCheck = document.getElementsByClassName('breakfast-option');
    // Confirm button
    var confirmBtn =    document.getElementsByClassName('confirm-trigger');
    
    // Variables to store user data
    var bookingDates = {};
    var bookingData = {
        breakfast: false
    };
    
    // Dom elements to write data into
    // Lakefront:
    var spanTotalNightsLakefront = document.getElementById('totalNightsLakefront');
    var spanTotalAdultsLakefront = document.getElementById('totalAdultsLakefront');
    var spanTotalChildrenLakefront = document.getElementById('totalChildrenLakefront');
    var spanBreakfastOptLakefront = document.getElementById('breakfastOptLakefront');
    var spanTotalCostLakefront = document.getElementById('priceTotalLakefront');
    
    // DATE PICKER FOR HOTEL
    $('.datepickerHotelIn').pickadate({
        format: 'd/m/yyyy',
        min: 1,
        onSet: function(context) {
            var selectedDate = context.select;
            var date = new Date(selectedDate);
            if (date != 'Invalid Date'){
                var dayCheckIn = date.getDate();
                var monthCheckIn = date.getMonth();
                var yearCheckIn = date.getFullYear();
                bookingDates.checkInDate = selectedDate;
                $('.datepickerHotelOut').pickadate({
                    format: 'd/m/yyyy',
                    disable: [
                        true,
                        [2018, 10, 21, 'inverted'],
                        { from: new Date(yearCheckIn,monthCheckIn,(dayCheckIn+1)), to: (hotelObj.maxNights - 1) }
                    ],
                    onSet: function(context){
                        bookingDates.checkOutDate = context.select;
                    }
                });
            }
        }
    });
    
    // DATE PICKER FOR HOSTEL
    $('.datepickerHostelIn').pickadate({
        format: 'd/m/yyyy',
        min: 1,
        onSet: function(context) {
            var selectedDate = context.select;
            var date = new Date(selectedDate);
            console.log(date);
            if (date != 'Invalid Date'){
                var dayCheckIn = date.getDate();
                var monthCheckIn = date.getMonth();
                var yearCheckIn = date.getFullYear();
                bookingDates.checkInDate = selectedDate;
                $('.datepickerHostelOut').pickadate({
                    format: 'd/m/yyyy',
                    disable: [
                        true,
                        [2018, 10, 21, 'inverted'],
                        { from: new Date(yearCheckIn,monthCheckIn,(dayCheckIn+1)), to: (hostelObj.maxNights - 1) }
                    ],
                    onSet: function(context){
                        bookingDates.checkOutDate = context.select;
                    }
                });
            }
        }
    });
    
    // DATE PICKER FOR MOTEL
    $('.datepickerMotelIn').pickadate({
        format: 'd/m/yyyy',
        min: 1,
        onSet: function(context) {
            var selectedDate = context.select;
            var date = new Date(selectedDate);
            console.log(date);
            if (date != 'Invalid Date'){
                var dayCheckIn = date.getDate();
                var monthCheckIn = date.getMonth();
                var yearCheckIn = date.getFullYear();
                bookingDates.checkInDate = selectedDate;
                $('.datepickerMotelOut').pickadate({
                    format: 'd/m/yyyy',
                    disable: [
                        true,
                        [2018, 10, 21, 'inverted'],
                        { from: new Date(yearCheckIn,monthCheckIn,(dayCheckIn+3)), to: (motelObj.maxNights - 3) }
                    ],
                    onSet: function(context){
                        bookingDates.checkOutDate = context.select;
                    }
                });
            }
        }
    });
    
    // DATE PICKER FOR HOUSE
    $('.datepickerHouseIn').pickadate({
        format: 'd/m/yyyy',
        min: 1,
        onSet: function(context) {
            var selectedDate = context.select;
            var date = new Date(selectedDate);
            console.log(date);
            if (date != 'Invalid Date'){
                var dayCheckIn = date.getDate();
                var monthCheckIn = date.getMonth();
                var yearCheckIn = date.getFullYear();
                bookingDates.checkInDate = selectedDate;
                $('.datepickerHouseOut').pickadate({
                    format: 'd/m/yyyy',
                    disable: [
                        true,
                        [2018, 10, 21, 'inverted'],
                        { from: new Date(yearCheckIn,monthCheckIn,(dayCheckIn+2)), to: (houseObj.maxNights - 2)}
                    ],
                    onSet: function(context){
                        bookingDates.checkOutDate = context.select;
                    }
                });
            }
        }
    });
    
    // Group number validation
    function inputValidation(max, min, arrayNo){
        var numAdults = parseInt(document.getElementsByClassName('inputAdult')[arrayNo].value);
        var numChildren = parseInt(document.getElementsByClassName('inputChild')[arrayNo].value);
        // Prevent var from returning NaN:
        // This syntax tells the variable to be itself if it has a value, or to be 0 if it is NaN
        numChildren = numChildren || 0;
        numAdults = numAdults || 0;
        var groupTotal = numChildren + numAdults;
        var warningDiv = document.getElementsByClassName('input-warning')[arrayNo];
        // Logic stores the value of true or false to determine whether the input is valid or not
        var logic;
        
        if (groupTotal > max){
            warningDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Maximum group number is ' + max + ' persons';
            logic = false;
        } else if (groupTotal < min){
            warningDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Group must be atleast ' + min + ' person(s)';
            logic = false;
        }
        else if (numAdults === 0){
            warningDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Group must contain atleast one adult';
            logic = false;
        } else{
            warningDiv.innerHTML = null;
            logic = true;
            // Store the successful values into the booking object
            bookingData.totalAdults = numAdults;
            bookingData.totalChildren = numChildren;
        }
        config.logic = logic;
        console.log(logic + ': inside inputValid()');
    }
    
    // inputValidation() event listeners:
    document.getElementsByClassName('cpcty-input-hotel')[0].addEventListener('mouseleave', function(){inputValidation(hotelObj.maxCapacity, hotelObj.minCapacity, 0);}, false);
    document.getElementsByClassName('cpcty-input-hostel')[0].addEventListener('mouseleave', function(){inputValidation(hostelObj.maxCapacity, hostelObj.minCapacity, 1);}, false);
    document.getElementsByClassName('cpcty-input-house')[0].addEventListener('mouseleave', function(){inputValidation(houseObj.maxCapacity, houseObj.minCapacity, 2);}, false);
    //document.getElementsByClassName('cpcty-input-motel')[0].addEventListener('mouseleave', function(){inputValidation(motelObj.maxCapacity, motelObj.minCapacity, 3);}, false);
    
    // Email validation
    function emailValidation(arrayNo){
        var warningDiv = document.getElementsByClassName('email-warning')[arrayNo];
        if (emailInput[arrayNo].validity.valid){
            warningDiv.innerHTML = null;
        } else{
            warningDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter a valid email';
        }
    }
    emailInput[0].addEventListener('mouseleave', function(){emailValidation(0);}, false);
    emailInput[1].addEventListener('mouseleave', function(){emailValidation(1);}, false);
    emailInput[2].addEventListener('mouseleave', function(){emailValidation(2);}, false);
    
    // Confirm form
    function confirmForm(arrayNo, modalName){
        var inputAdults = config.logic;
        console.log(config.logic);
        if (emailInput[arrayNo].validity.valid
            && nameInput[arrayNo].validity.valid 
            && inputAdults
            && checkOutInput[arrayNo].value 
            && checkInInput[arrayNo].value){
            confirmBtn[arrayNo].setAttribute('data-toggle','modal');
            confirmBtn[arrayNo].setAttribute('data-target','#confirmation' + modalName);
            confirmBtn[arrayNo].setAttribute('data-dismiss','modal');
            confirmBtn[arrayNo].setAttribute('aria-label','Close');
            console.log('Booking data:');
            calcualteStayDuration();
            console.dir(bookingData);
            console.log('total cost:');
            calculateData();
        } else{
            confirmBtn[arrayNo].removeAttribute('data-toggle');
            confirmBtn[arrayNo].removeAttribute('data-target');
            confirmBtn[arrayNo].removeAttribute('data-dismiss');
            confirmBtn[arrayNo].removeAttribute('aria-label');
            console.log('not working');
            console.log('Booking data:');
            calcualteStayDuration();
            console.dir(bookingData);
        }
    }
    
    // confirmForm() Event listeners:
    confirmBtn[0].addEventListener('click', function(){confirmForm(0, 'Lakefront');}, false);
    confirmBtn[1].addEventListener('click', function(){confirmForm(1, 'Alpine');}, false);
    confirmBtn[2].addEventListener('click', function(){confirmForm(2, 'Skiqt');}, false);
    
    // Calculate nights of stay and store into booking obj
    function calcualteStayDuration(){
        // Variable that minuses the stored inputed time stamps from each other to find their difference
        var dateResult = (bookingDates.checkOutDate - bookingDates.checkInDate);
        // Variable that converts the timestamp outputed by dateResult into days
        var resultConverted = Math.floor(dateResult / (1000 * 60 * 60 * 24));
        bookingData.stayDuration = resultConverted;
    }
    
    // Add breakfast option to booking data
    function breakfastBoolean(arrayNo){
        console.log('working');
        if (breakfastCheck[arrayNo].checked === true){
            bookingData.breakfast = true;
        }
    }
    breakfastCheck[0].addEventListener('click', function(){breakfastBoolean(0);}, false);
    
    // Calculate booking data
    function calculateData(){
        var breakfast;
        if (bookingData.breakfast === true){
            var breakfast = 10;
        } else{
            var breakfast = 0;
        }
        var totalCost = ((bookingData.totalAdults + bookingData.totalChildren) * bookingData.stayDuration * accomodation.hotel.price) + (bookingData.stayDuration * breakfast);
        console.log(totalCost);
    }
    
    // Write booking data into the dom
    function displayData(){
        spanTotalNightsLakefront.textContent = bookingData.stayDuration;
        spanTotalAdultsLakefront.textContent = bookingData.totalAdults;
        spanTotalChildrenLakefront.textContent = bookingData.totalChildren;
//        spanBreakfastOptLakefront.textContent = '+ $10 breakfast per person';
        spanTotalCostLakefront.textContent = 'noodle';
    }
    
    // Toggle filtre view
    $('#filtreToggle').click(function(){
        $('.opts-fltr-ctnr').toggleClass('fltr-shut');
        $('.dropdown').toggleClass('dropup');
    });
    
    // Toggle map and list view
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
}); // END jquery doc.ready

// Map box code
mapboxgl.accessToken = 'pk.eyJ1IjoiaXpzaSIsImEiOiJjamkzbjQxMWQwMGFzM2tvNDM5NTB6cmlrIn0.a5L-XDDBNFQ-0BrqtQpNCg';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [168.697751, -45.026377], // starting position [lng, lat]
    zoom: 11 // starting zoom
});