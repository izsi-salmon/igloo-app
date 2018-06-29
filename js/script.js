console.log(locations.queenstown);

// Start js
$(document).ready(function(){
    
    // Data variables
    var config = {};
    var hotelObj = data.hotel;
    var hostelObj = data.hostel;
    var houseObj = data.house;
    var motelObj = data.motel;
    
    // content containers
    
    // Anchor for creating thumbnails
    var thumbnailAnchor =   document.getElementsByClassName('opts-fltr-ctnr')[0];
    // Thumbnail containers
    var thumbnailImg =      document.getElementsByClassName('image-ctnr');
    var thumbnailTitle =    document.getElementsByClassName('thumbnail-title');
    var thumbnailDistance = document.getElementsByClassName('distance-number');
    var thumbnailPrice =    document.getElementsByClassName('price-number');
    var thumbnailStars =    document.getElementsByClassName('star-ctnr');
    
    // Modal containers
    
    // Details modal
    var modalImg =          document.getElementsByClassName('modal-img')[0];
    var modalTitle =        document.getElementsByClassName('modal-title')[0];
    var modalDistance =     document.getElementsByClassName('modal-distance')[0];
    var modalPrice =        document.getElementsByClassName('modal-price')[0];
    var modalStars =        document.getElementsByClassName('star-ctnr-modal')[0];
    var modalDescription =  document.getElementsByClassName('modal-dscptn')[0];
    var modalFeatures =     document.getElementsByClassName('ft-flex')[0];
        
    // Input variables
    var checkInInput =   document.getElementsByClassName('check-in');
    var checkOutInput =  document.getElementsByClassName('check-out');
    var adultInput =     document.getElementsByClassName('inputAdult');
    var childInput =     document.getElementsByClassName('inputChild');
    var nameInput =      document.getElementsByClassName('input-name');
    var emailInput =     document.getElementsByClassName('input-email');
    var breakfastCheck = document.getElementsByClassName('breakfast-option');
    // Confirm button
    var confirmBtn =     document.getElementsByClassName('confirm-trigger');
    
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
    
    // Function that creates the thumbnails for the accomodation options
    function loadThumbnails(){
        for (var i = 0; i < locations.queenstown.length; i++){
            // Creating the div to contain the thumbnail
            var thumbnailContainer = document.createElement('div');
            thumbnailContainer.setAttribute('class','thumbnail-ctnr');
            thumbnailContainer.innerHTML = '<div class="image-ctnr"></div><div class="centre-el-ctnr"><div class="thumbnail-title"></div><div class="txt-distance"><span class="distance-number"></span>km from Remarkables ski area</div><div class="star-ctnr"></div><button class="btn btn-modal view-details"  data-toggle="modal" data-target="#detailsLakefront">view details</button></div><div class="txt-price"><div>$<span class="price-number"></span> NZD</div><div>/ night</div></div><div class="btn-map"><i class="fas fa-map-marker-alt"></i></div>';
            // Placing the code into the DOM
            thumbnailAnchor.after(thumbnailContainer);
            // Injecting relevant data into each thumbnail by using i as the argument
            writeThumbnails(i);
            setDetailButton(i);
        }
    }
    loadThumbnails();
    
    // Function that writes thumbnail data
    function writeThumbnails(arrayNo){
        console.log('Function fired: ' + arrayNo);
        thumbnailImg[0].innerHTML = locations.queenstown[arrayNo].img;
        thumbnailTitle[0].innerHTML = locations.queenstown[arrayNo].title;
        thumbnailDistance[0].innerHTML = locations.queenstown[arrayNo].distance;
        thumbnailPrice[0].innerHTML = locations.queenstown[arrayNo].price;
        for (var i = 0; i < locations.queenstown[arrayNo].stars; i++){
            thumbnailStars[0].innerHTML += elements.stars[arrayNo];
        }
    }
    
    // Function that sets relevant event listeners to each thumbnail button
    function setDetailButton(arrayNo){ // by numbering the buttons we can target them one by one
        var detailsBtn = document.getElementsByClassName('view-details')[0];
        detailsBtn.addEventListener('click', function(){writeModal(arrayNo);}, false);
        // This function gives a counter to the event listeners so they inject the corresponding data into the DOM
    }
    
    // Function that writes data into the modal depending on which option is clicked
    function writeModal(arrayNo){
//        console.log('writeModal(): ' + arrayNo)
        modalImg.innerHTML = locations.queenstown[arrayNo].img;
        modalTitle.innerHTML = locations.queenstown[arrayNo].title;
        modalDistance.innerHTML = locations.queenstown[arrayNo].distance;
        modalPrice.innerHTML = locations.queenstown[arrayNo].price;
        modalDescription.innerHTML = locations.queenstown[arrayNo].description;
        modalFeatures.innerHTML = '';
        // FEATURES FOR LOOP
        for (var c = 0; c < locations.queenstown[arrayNo].features.length; c++){
            modalFeatures.innerHTML += locations.queenstown[arrayNo].features[c];
        }
        modalStars.innerHTML = '';
        for (var i = 0; i < locations.queenstown[arrayNo].stars; i++){
            modalStars.innerHTML += elements.stars[arrayNo];
            console.log('stars for loop working');
        }
        setBookingButton(arrayNo);
    }
    
    /* Function that sets up booking button event listener with a relevant argument so
       when clicked it injects appropriate data into the booking modal*/
    function setBookingButton(arrayNo){
        var bookingBtn = document.getElementsByClassName('book-now')[0];
        bookingBtn.addEventListener('click', function(){setUpBooking(arrayNo);}, false);
    }
    
    // NOT WORKING
    function setUpBooking(arrayNo){
        console.log(checkInInput[0]);
        console.log(checkOutInput[0]);
        checkInInput[0].classList.add('datepicker' + locations.queenstown[arrayNo].type + 'In');
        checkOutInput[0].classList.add('datepicker' + locations.queenstown[arrayNo].type + 'Out');
        console.log(checkInInput[0]);
        console.log(checkOutInput[0]);
    }
    
//     DATE PICKER FOR HOTEL
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
//    document.getElementsByClassName('cpcty-input-hostel')[0].addEventListener('mouseleave', function(){inputValidation(hostelObj.maxCapacity, hostelObj.minCapacity, 1);}, false);
//    document.getElementsByClassName('cpcty-input-house')[0].addEventListener('mouseleave', function(){inputValidation(houseObj.maxCapacity, houseObj.minCapacity, 2);}, false);
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
//    emailInput[1].addEventListener('mouseleave', function(){emailValidation(1);}, false);
//    emailInput[2].addEventListener('mouseleave', function(){emailValidation(2);}, false);
    
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
//    confirmBtn[0].addEventListener('click', function(){confirmForm(0, 'Lakefront');}, false);
//    confirmBtn[1].addEventListener('click', function(){confirmForm(1, 'Alpine');}, false);
//    confirmBtn[2].addEventListener('click', function(){confirmForm(2, 'Skiqt');}, false);
    
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
        var totalCost = ((bookingData.totalAdults + bookingData.totalChildren) * bookingData.stayDuration * accomodation.hotel.price) + ((bookingData.totalAdults + bookingData.totalChildren) * bookingData.stayDuration * breakfast);
        console.log(totalCost);
//        displayData();
    }
    
    // Write booking data into the dom
    function displayData(){
        spanTotalNightsLakefront.textContent = bookingData.stayDuration;
        spanTotalAdultsLakefront.textContent = bookingData.totalAdults;
        spanTotalChildrenLakefront.textContent = bookingData.totalChildren;
//        spanBreakfastOptLakefront.textContent = '+ $10 breakfast per person';
        spanTotalCostLakefront.textContent = totalCost;
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