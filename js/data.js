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
            },
            {
                type: 'motel',
                img: '<img src="images/queenstown_motel.jpg" alt="picture of window overlooking a lake">',
                title: 'The Little Rest',
                distance: 100,
                field: 'Coronet Peak',
                price: data.motel.price,
                stars: 2,
                description: 'A comfortable little motel near the village centre of Queenstown. Basic breakfast provided, cooked breakfast additional.',
                features: [elements.features.wifi, elements.features.meals]
            },
            {
                type: 'hostel',
                img : '<img src="images/queenstown_hostel2.jpg" alt="picture of a balcony overviewing mountains">',
                title: 'Mountain Hideaway',
                distance: 100,
                field: 'Cadrona Skifield',
                price: data.hostel.price,
                stars: 2,
                description: 'A peaceful hideaway in the wild country between Wanaka and Queenstown. Big farm style breakfast each morning to start your adventurous day right.',
                features: [elements.features.wifi, elements.features.meals]
            }
    ],
    christchurch: [
            {
                type: 'hotel',
                img: '<img src="images/christchurch_hotel.jpg" alt="picture of Cathedral Square">',
                title: 'Cathedral Square Hotel',
                distance: 100,
                field: 'Mt. Hutt',
                price: data.hotel.price,
                stars: 3,
                description: 'Excellent hotel in the Christchurch CBD overlooking Cathedral square. Buffet breakfast available.',
                features: [elements.features.wifi, elements.features.meals]
            },
            {
                type: 'hostel',
                img: '<img src="images/christchurch_hostel.jpg" alt="picture of an old hostel">',
                title: 'Dunstan House',
                distance: 100,
                field: 'Mt. Hutt',
                price: data.hostel.price,
                stars: 2,
                description: 'Cosy hostel in the quiet suburbs of Christchurch.',
                features: [elements.features.wifi]
            },
            {
                type: 'motel',
                img: '<img src="images/christchurch_motel.jpg" alt="picture of window overlooking a lake">',
                title: 'Springfield Inn',
                distance: 100,
                field: 'Mt. Olympus',
                price: data.motel.price,
                stars: 2,
                description: 'Perfection location for an exploration of Cantebury. Only a few minutes drive from Castle Hill and Mt. Olympus',
                features: [elements.features.wifi]
            }
    ],
    whakapapa: [
            {
                type: 'hotel',
                img: '<img src="images/whakapapa_hotel.jpg" alt="picture of Chateau Tongariro">',
                title: 'Chateau Tongariro',
                distance: 100,
                field: 'Whakapapa Ski Area',
                price: data.hotel.price,
                stars: 5,
                description: 'A stunning heritage hotel located in Whakapapa village at the base of Mount Ruapehu. Treat yourself after a day of skiing or walking with a soak in our private spas. Decadent buffet breakfast available so you can get the most out of your day.',
                features: [elements.features.wifi, elements.features.meals, elements.features.scenic, elements.features.spa]
            },
            {
                type: 'hostel',
                img: '<img src="images/ohakune_hostel2.jpg" alt="picture of an old hostel">',
                title: 'Ohakune Lodge',
                distance: 100,
                field: 'Turoa',
                price: data.hostel.price,
                stars: 2,
                description: 'Enjoy an adventurous holiday with a comfy stay in our lodge, you\ll love our cosy fireside lounge after a day out in the elements!',
                features: [elements.features.wifi]
            },
            {
                type: 'motel',
                img: '<img src="images/whakapapa_motel.jpg" alt="picture of bush and ruapehu">',
                title: 'The Bush Motel',
                distance: 100,
                field: 'Whakapapa Ski Area',
                price: data.motel.price,
                stars: 3,
                description: 'The perfect stay for those looking for a little solitude and lots of adventure. Located between Whakapapa ski area and the Tongariro crossing.',
                features: [elements.features.wifi, elements.features.scenic]
            },
            {
                type: 'hostel',
                img: '<img src="images/ohakune_hostel.jpg" alt="picture of the front of a wooden lodge">',
                title: 'Greenlane Rest',
                distance: 100,
                field: 'Turoa',
                price: data.hostel.price,
                stars: 3,
                description: 'A beautiful lodge tucked away in the peaceful outskirts of Ohakune.',
                features: [elements.features.wifi, elements.features.scenic]
            }
    ]
}