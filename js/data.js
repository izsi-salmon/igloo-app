var data = {
    hotel: {
        minCapacity: 1,
        maxCapacity: 2,
        minNights: 1,
        maxNights: 5,
        price: 157
    },
    hostel: {
        minCapacity: 1,
        maxCapacity: 6,
        minNights: 1,
        maxNights: 10,
        price: 30
    },
    motel: {
        minCapacity: 2,
        maxCapacity: 4,
        minNights: 3,
        maxNights: 10,
        price: 90
    },
    house: {
        minCapacity: 1,
        maxCapacity: 4,
        minNights: 2,
        maxNights: 15,
        price: 240
    }
}

var elements = {
    stars: ['<i class="fas fa-star">','<i class="fas fa-star">','<i class="fas fa-star">','<i class="fas fa-star">','<i class="fas fa-star">'],
    features: {
        wifi: '<div class="iconTxt-wrapper"><img src="images/icons/wifi.svg" alt="wifi svg test"><div class="icon-title">wifi</div></div>',
        meals: '<div class="iconTxt-wrapper"><img src="images/icons/meal.svg" alt="meal svg test"><div class="icon-title">meals</div></div>',
        scenic: '<div class="iconTxt-wrapper"><img src="images/icons/scenic.svg" alt="scenic svg test"><div class="icon-title">scenic</div></div>',
        spa: '<div class="iconTxt-wrapper"><img src="images/icons/spa.svg" alt="spa svg test"><div class="icon-title">spa</div></div>'
    }
}

var locations = {
    queenstown: [
            {
                type: 'hotel',
                img : '<img src="images/queenstown_hotel.jpg" alt="picture of window overlooking a lake">',
                title: 'Lakefront Hotel',
                distance: 120,
                field: 'Coronet Peak',
                price: data.hotel.price,
                stars: 4,
                description: 'The Lakefront hotel offers stunning views of Lake Wakatipu and snowy mountains, to be enjoyed from your luxurious room.',
                features: [elements.features.wifi, elements.features.meals, elements.features.scenic, elements.features.spa]
            },
            {
                type: 'hostel',
                img : '<img src="images/queenstown_hostel.jpeg" alt="picture of a balcony overviewing mountains">',
                title: 'Alpine Lodge',
                distance: 100,
                field: 'Coronet Peak',
                price: data.hostel.price,
                stars: 3,
                description: 'The most beautiful hostel in queenstown.',
                features: [elements.features.wifi, elements.features.scenic]
            },
            {
                type: 'house',
                img : '<img src="images/queenstown_house.jpeg" alt="picture of house in the snow">',
                title: 'Ski QT House',
                distance: 50,
                field: 'Remarkables Ski Area',
                price: data.house.price,
                stars: 3,
                description: 'A cosy home base for a ski holiday.',
                features: [elements.features.wifi]
            }
    ],
    christchurch: [
            {
                type: 'hotel',
                img: '<img src="images/christchurch_hotel.jpg" alt="picture of window overlooking a lake">',
                title: 'Cathedral Square Hotel',
                distance: 100,
                field: 'Mt. Olympus',
                price: data.hotel.price,
                stars: 3,
                description: 'Excellent hotel in the Christchurch CBD overlooking Cathedral square. Buffet breakfast available.',
                features: [elements.features.wifi, elements.features.meals]
            },
            {
                type: 'hostel',
                img: '<img src="images/christchurch_hostel.jpg" alt="picture of window overlooking a lake">',
                title: 'Dunstan House',
                distance: 100,
                field: 'Mt. Olympus',
                price: data.hostel.price,
                stars: 2,
                description: 'Cosy hostel in the quiet suburbs of Christchurch.',
                features: [elements.features.wifi, elements.features.meals]
            },
    ]
}