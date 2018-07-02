$(document).ready(function(){
    
    // Data variables
    var config = {};
    var hotel = data.hotel;
    var hostel = data.hostel;
    var house = data.house;
    var motel = data.motel;
    
    // Search bar
    var searchInput =  document.getElementById('searchInput');
    var searchButton = document.getElementById('searchButton');
    
    // CONTENT CONTAINERS
    
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
    var modalImg =          document.getElementsByClassName('modal-img');
    var modalTitle =        document.getElementsByClassName('modal-title');
    var modalDistance =     document.getElementsByClassName('modal-distance')[0];
    var modalPrice =        document.getElementsByClassName('modal-price');
    var modalStars =        document.getElementsByClassName('star-ctnr-modal')[0];
    var modalDescription =  document.getElementsByClassName('modal-dscptn')[0];
    var modalFeatures =     document.getElementsByClassName('ft-flex')[0];
    // Booking modal
    var modalCheckInCtnr =  document.getElementsByClassName('check-in-ctnr')[0];
    var modalCheckOutCtnr = document.getElementsByClassName('check-out-ctnr')[0];
    var modalInputCtnr =    document.getElementsByClassName('form-flex')[0];
    var modalAdultCtnr =    document.getElementsByClassName('adult-input-ctnr')[0];
    var modalChildCtnr =    document.getElementsByClassName('child-input-ctnr')[0];
    var warningDiv =        document.getElementsByClassName('input-warning');
    var modalNameCtnr =     document.getElementsByClassName('name-ctnr')[0];
    var modalEmailCtnr =    document.getElementsByClassName('email-ctnr')[0];
    var modalExtrasCtnr =   document.getElementsByClassName('txt-extras')[0];
        
    // Input variables
    var checkInInput =   document.getElementsByClassName('check-in');
    var checkOutInput =  document.getElementsByClassName('check-out');
//    var adultInput =     document.getElementsByClassName('inputAdult')[0];
//    var childInput =     document.getElementsByClassName('inputChild')[0];
//    var nameInput =      document.getElementsByClassName('input-name')[0];
//    ;
    
    // Confirm button
    var confirmBtn =     document.getElementsByClassName('confirm-trigger')[0];
    
    // Variables to store user data
    var bookingDates = {};
    var bookingData = {};
    
    // Dom elements to write data into
    var spanTotalNights =   document.getElementById('totalNights');
    var spanTotalAdults =   document.getElementById('totalAdults');
    var spanTotalChildren = document.getElementById('totalChildren');
    var spanBreakfastOpt =  document.getElementById('breakfastOpt');
    var spanTotalCost =     document.getElementById('priceTotal');
    
    // ---------------------- END DOM QUIERIES ----------------------
    
    // Function that initiates thumbnails after location search
    function search(){
        var searchInputValue = searchInput.value;
        console.log(searchInputValue);
        if (searchInputValue == 'queenstown' /*|| 'cadrona' || 'remarkables' || 'coronet peak' */){
            console.log('Queenstown');
            } else if (searchInputValue == 'christchurch' /*|| 'mt hutt' || 'temple basin' || 'athur\'s pass' || 'cheeseman' || 'porters' || 'broken river'*/){
                console.log('Christchurch');
            } else if (searchInputValue == 'whakapapa' /*|| 'ruapehu' || 'tongariro' || 'ohakune' || 'national park' || 'turoa'*/){
                console.log('Whakapapa');
            } else {
                console.log('No results');
            }
    }
    searchButton.addEventListener('click', search, false);
    
    // Function that creates the thumbnails for the accomodation options
    function loadThumbnails(){
        for (var i = 0; i < locations.queenstown.length; i++){
            // Creating the div to contain the thumbnail
            var thumbnailContainer = document.createElement('div');
            thumbnailContainer.setAttribute('class','thumbnail-ctnr');
            thumbnailContainer.innerHTML = '<div class="image-ctnr"></div><div class="centre-el-ctnr"><div class="thumbnail-title"></div><div class="txt-distance"><span class="distance-number"></span>km from Remarkables ski area</div><div class="star-ctnr"></div><button class="btn btn-modal view-details"  data-toggle="modal" data-target="#details">view details</button></div><div class="txt-price"><div>$<span class="price-number"></span> NZD</div><div>/ night</div></div><div class="btn-map"><i class="fas fa-map-marker-alt"></i></div>';
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
        modalImg[0].innerHTML = locations.queenstown[arrayNo].img;
        modalTitle[0].innerHTML = locations.queenstown[arrayNo].title;
        modalDistance.innerHTML = locations.queenstown[arrayNo].distance;
        modalPrice[0].innerHTML = locations.queenstown[arrayNo].price;
        modalDescription.innerHTML = locations.queenstown[arrayNo].description;
        modalFeatures.innerHTML = '';
        // FEATURES FOR LOOP
        for (var c = 0; c < locations.queenstown[arrayNo].features.length; c++){
            modalFeatures.innerHTML += locations.queenstown[arrayNo].features[c];
        }
        modalStars.innerHTML = '';
        for (var i = 0; i < locations.queenstown[arrayNo].stars; i++){
            modalStars.innerHTML += elements.stars[arrayNo];
        }
        setBookingButton(arrayNo);
    }
    
    /* Function that sets up booking button event listener with a relevant argument so
       when clicked it injects appropriate data into the booking modal*/
    function setBookingButton(arrayNo){
        var bookingBtn = document.getElementsByClassName('book-now')[0];
        bookingBtn.addEventListener('click', function(){setUpBooking(arrayNo);}, false);
    }
    
    // Function that sets up the booking modal
    function setUpBooking(arrayNo){
        // Set identity
        modalTitle[1].innerHTML = locations.queenstown[arrayNo].title;
        modalImg[1].innerHTML = locations.queenstown[arrayNo].img;
        modalPrice[1].innerHTML = locations.queenstown[arrayNo].price;
        
        // SET UP DATE INPUTS
        // Set inputs to blank/default each time the loop runs
        modalCheckInCtnr.innerHTML = '<input type="text" class="check-in" required>';
        modalCheckOutCtnr.innerHTML = '<input type="text" class="check-out" required readonly>';
        // Add datepicker class after reset so it is always the approprate picker
        checkInInput[0].classList.add('datepicker' + locations.queenstown[arrayNo].type + 'In');
        checkOutInput[0].classList.add('datepicker' + locations.queenstown[arrayNo].type + 'Out');
        initDatePickers();
        
        // SET UP NUMBER INPUTS
        modalInputCtnr.setAttribute('class','form-flex');
        modalAdultCtnr.innerHTML = '<input type="number" class="inputAdult">';
        modalChildCtnr.innerHTML = '<input type="number" class="inputChild">';
        warningDiv[0].innerHTML = null;
        // Adding a new event listener(EL) class so it gets reset each time the function is invoked
        modalInputCtnr.classList.add('EL-class');
        var elElement = document.getElementsByClassName('EL-class')[0];
        // Eval converts the string returned from: locations.queenstown[arrayNo].type into code (removing the '')
        var accomodationShortcut = eval(locations.queenstown[arrayNo].type);
        var max = accomodationShortcut.maxCapacity;
        var min = accomodationShortcut.minCapacity;
        elElement.addEventListener('mouseleave', function(){inputValidation(max, min);}, false);
        
        // SET UP TEXT INPUTS
        modalNameCtnr.innerHTML = '<input type="text" class="input-name" required>';
        modalEmailCtnr.innerHTML = '<input type="email" class="input-email" required>';
        var nameInput = document.getElementsByClassName('input-name')[0];
        var emailInput = document.getElementsByClassName('input-email')[0];
        warningDiv[1].innerHTML = null;
        emailInput.addEventListener('mouseleave', function(){emailValidation(emailInput);}, false);
        
        // SET BREAKFAST OPTION
        modalExtrasCtnr.innerHTML = '';
        bookingData.breakfast = false;
        for (var i = 0; i < locations.queenstown[arrayNo].features.length; i++){
                if (locations.queenstown[arrayNo].features[i] === '<div class="iconTxt-wrapper"><img src="images/icons/meal.svg" alt="meal svg test"><div class="icon-title">meals</div></div>'){
                    modalExtrasCtnr.innerHTML = '<input type="checkbox" class="breakfast-option"> Include breakfast <span class="green"> + $10.00 NZD</span>';
                    var breakfastInput = document.getElementsByClassName('breakfast-option')[0];
                    confirmBtn.addEventListener('click', function(){breakfastBoolean(breakfastInput);}, false);
                }
            }
        
        // SET CONFIRM EVENT LISTENER
        confirmBtn.addEventListener('click', function(){confirmForm(emailInput, nameInput, arrayNo);}, false);
        
        }
    
    // Function that initialises date picker plugin
    function initDatePickers(){
        $('.datepickerhotelIn').pickadate({
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
                    $('.datepickerhotelOut').pickadate({
                        format: 'd/m/yyyy',
                        disable: [
                            true,
                            [2018, 10, 21, 'inverted'],
                            { from: new Date(yearCheckIn,monthCheckIn,(dayCheckIn+1)), to: (hotel.maxNights - 1) }
                        ],
                        onSet: function(context){
                            bookingDates.checkOutDate = context.select;
                        }
                    });
                }
            }
        });

        // DATE PICKER FOR HOSTEL
        $('.datepickerhostelIn').pickadate({
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
                    $('.datepickerhostelOut').pickadate({
                        format: 'd/m/yyyy',
                        disable: [
                            true,
                            [2018, 10, 21, 'inverted'],
                            { from: new Date(yearCheckIn,monthCheckIn,(dayCheckIn+1)), to: (hostel.maxNights - 1) }
                        ],
                        onSet: function(context){
                            bookingDates.checkOutDate = context.select;
                        }
                    });
                }
            }
        });

        // DATE PICKER FOR MOTEL
        $('.datepickermotelIn').pickadate({
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
                    $('.datepickermotelOut').pickadate({
                        format: 'd/m/yyyy',
                        disable: [
                            true,
                            [2018, 10, 21, 'inverted'],
                            { from: new Date(yearCheckIn,monthCheckIn,(dayCheckIn+3)), to: (motel.maxNights - 3) }
                        ],
                        onSet: function(context){
                            bookingDates.checkOutDate = context.select;
                        }
                    });
                }
            }
        });

        // DATE PICKER FOR HOUSE
        $('.datepickerhouseIn').pickadate({
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
                    $('.datepickerhouseOut').pickadate({
                        format: 'd/m/yyyy',
                        disable: [
                            true,
                            [2018, 10, 21, 'inverted'],
                            { from: new Date(yearCheckIn,monthCheckIn,(dayCheckIn+2)), to: (house.maxNights - 2)}
                        ],
                        onSet: function(context){
                            bookingDates.checkOutDate = context.select;
                        }
                    });
                }
            }
        });
    }
    
    // Group number validation
    function inputValidation(max, min){
        // Get the number from the user input
        var numAdults = parseInt(document.getElementsByClassName('inputAdult')[0].value);
        var numChildren = parseInt(document.getElementsByClassName('inputChild')[0].value);
        // Prevent var from returning NaN:
        // This syntax tells the variable to be itself if it has a value, or to be 0 if it is NaN
        numChildren = numChildren || 0;
        numAdults = numAdults || 0;
        var groupTotal = numChildren + numAdults;
        // Logic stores the value of true or false to determine whether the input is valid or not
        var logic;
        if (groupTotal > max){
            warningDiv[0].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Maximum group number is ' + max + ' persons';
            logic = false;
        } else if (groupTotal < min){
            warningDiv[0].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Group must be atleast ' + min + ' person(s)';
            logic = false;
        }
        else if (numAdults === 0){
            warningDiv[0].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Group must contain atleast one adult';
            logic = false;
        } else{
            warningDiv[0].innerHTML = null;
            logic = true;
            // Store the successful values into the booking object
            bookingData.totalAdults = numAdults;
            bookingData.totalChildren = numChildren;
        }
        config.logic = logic;
    }
    
    // Email validation
    function emailValidation(emailInput){
        if (emailInput.validity.valid){
            warningDiv[1].innerHTML = null;
        } else{
            warningDiv[1].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter a valid email';
        }
    }
    
    // Confirm form
    function confirmForm(emailInput, nameInput, arrayNo){
        var inputAdults = config.logic;
        if (emailInput.validity.valid
            && nameInput.validity.valid 
            && inputAdults
            && checkOutInput[0].value 
            && checkInInput[0].value){
            confirmBtn.setAttribute('data-toggle','modal');
            confirmBtn.setAttribute('data-target','#confirmation');
            confirmBtn.setAttribute('data-dismiss','modal');
            confirmBtn.setAttribute('aria-label','Close');
            bookingData.arrayNumber = arrayNo;
            calcualteStayDuration();
            console.log('Booking data:');
            console.dir(bookingData);
            console.log('total cost:');
            calculateData();
        } else if (emailInput.validity.valid === false
            && nameInput.validity.valid 
            && inputAdults
            && checkOutInput[0].value 
            && checkInInput[0].value){
            confirmBtn.removeAttribute('data-toggle');
            confirmBtn.removeAttribute('data-target');
            confirmBtn.removeAttribute('data-dismiss');
            confirmBtn.removeAttribute('aria-label');
            warningDiv[1].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please enter a valid email';
        } else{
            confirmBtn.removeAttribute('data-toggle');
            confirmBtn.removeAttribute('data-target');
            confirmBtn.removeAttribute('data-dismiss');
            confirmBtn.removeAttribute('aria-label');
            warningDiv[1].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Please complete all fields';
            console.log('error');
        }
    }
    
    
    // Calculate nights of stay and store into booking obj
    function calcualteStayDuration(){
        // Variable that minuses the stored inputed time stamps from each other to find their difference
        var dateResult = (bookingDates.checkOutDate - bookingDates.checkInDate);
        // Variable that converts the timestamp outputed by dateResult into days
        var resultConverted = Math.floor(dateResult / (1000 * 60 * 60 * 24));
        bookingData.stayDuration = resultConverted;
    }
    
     // Add breakfast option to booking data
    function breakfastBoolean(breakfastInput){
        if (breakfastInput.checked === true){
            bookingData.breakfast = true;
        }
    }
    
    // Calculate booking data
    function calculateData(){
        var breakfast;
        if (bookingData.breakfast === true){
            var breakfast = 10;
        } else{
            var breakfast = 0;
        }
        var totalCost = ((bookingData.totalAdults + bookingData.totalChildren) * bookingData.stayDuration * data.hotel.price) + ((bookingData.totalAdults + bookingData.totalChildren) * bookingData.stayDuration * breakfast);
        console.log(totalCost);
        displayData(totalCost);
    }
    
    // Write booking data into the dom
    function displayData(totalCost){
        var arrayNo = bookingData.arrayNumber;
        modalTitle[2].innerHTML = locations.queenstown[arrayNo].title;
        modalImg[2].innerHTML = locations.queenstown[arrayNo].img;
        spanTotalNights.textContent = bookingData.stayDuration;
        spanTotalAdults.textContent = bookingData.totalAdults;
        spanTotalChildren.textContent = bookingData.totalChildren;
        modalPrice[2].textContent = locations.queenstown[arrayNo].price;
        modalPrice[3].textContent = locations.queenstown[arrayNo].price;
        if (bookingData.breakfast){
            spanBreakfastOpt.textContent = '+ $10 breakfast per person';
        } else{
            spanBreakfastOpt.textContent = null;
        }
        spanTotalCost.textContent = totalCost;
    }
    
    // PAGE ANIMATIONS
    
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
    // Toggle map and list view
    $('.vl').click(function(){
        $('#map').removeClass('map-on');
        $('.btn-map').removeClass('v-active');
        $('.vl').addClass('v-active');
        $('.list-view').removeClass('lv-translate');
    });
    // Reservation confirmation animation
    $('#reserve-btn').click(function(){
        $('.confirmation-txt').show(500);
        $(this).addClass('green-btn');
        $(this).text('reserved');
    });
    // Reset reserve button to default when modal is closed
    $('#confirmation').on('hidden.bs.modal', function () {
        console.log('working');
        $('.confirmation-txt').hide(500);
        $('#reserve-btn').removeClass('green-btn');
        $('#reserve-btn').text('reserve');
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