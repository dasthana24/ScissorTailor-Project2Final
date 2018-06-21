var Product = require('../models/product');



var mongoose = require('mongoose');



mongoose.connect('mongodb://mynewuser:myuser1234@ds263520.mlab.com:63520/heroku_820grfdl');



var products = [

    new Product({

        imagePath: 'https://i.imgur.com/FkiTlxE.jpg',

        title: 'Evening Dress',

        description: 'Mermaid Wedding Dress',

        price: 110

    }),

    new Product({

        imagePath: 'https://i.imgur.com/Cop0PiD.jpg',

        title: 'Evening Dress',

        description: 'Applique Chiffon A Line Long Evening Dress',

        price: 60

    }),

    new Product({

        imagePath: 'https://i.imgur.com/wQJDbEb.jpg',

        title: 'Summer Dress',

        description: 'Floor-Length Sleevelss',

        price: 40

    }),

    new Product({

        imagePath: 'https://i.imgur.com/8rzZaZW.jpg',

        title: 'Party Dress',

        description: 'White Single Piece',

        price: 55

    }),

    new Product({

        imagePath: 'https://i.imgur.com/KEfKcq6.jpg',

        title: 'Office Wear',

        description: 'Handloom Print',

        price: 29

    }),
    new Product({

        imagePath: 'https://i.imgur.com/n0YXR4Y.jpg',

        title: 'Office Wear',

        description: 'Blue Knee Length',

        price: 29

    }),
    new Product({

        imagePath: 'https://i.imgur.com/Tm3cMuO.jpg',

        title: 'Evening Wear',

        description: 'Long Purple Dress',

        price: 69

    }),
    new Product({

        imagePath: 'https://i.imgur.com/lMMLbtN.png',

        title: 'Indian Wedding Wear',

        description: 'Red Lehenga',

        price: 119

    }),
    new Product({

        imagePath: 'https://i.imgur.com/PkathXJ.jpg',

        title: 'Indian Saree Wear',

        description: 'Red Net Saree',

        price: 79

    }),
    new Product({

        imagePath: 'https://i.imgur.com/pP36NqC.jpg',

        title: 'Dress',

        description: 'Red Dress',

        price: 39

    }),
    new Product({

        imagePath: 'https://i.imgur.com/lCaWu0V.jpg',

        title: 'Dress',

        description: 'Blue Dress',

        price: 39

    }),
    new Product({

        imagePath: 'https://i.imgur.com/cdFpnxg.jpg',

        title: 'Dress',

        description: 'Pink Dress',

        price: 39

    }),
    new Product({

        imagePath: 'https://i.imgur.com/wP42Sq6.jpg',

        title: 'Dress',

        description: 'Pink Dress',

        price: 39

    }),
    new Product({

        imagePath: 'https://i.imgur.com/g48F0Sh.jpg',

        title: 'Indian Wear',

        description: 'Silk Lehenga',

        price: 129

    }),
    new Product({

        imagePath: 'https://i.imgur.com/MKhbad5.jpg',

        title: 'Casual Wear',

        description: 'Green Dress',

        price: 32

    }),
    new Product({

        imagePath: 'https://i.imgur.com/Qzt5ksD.jpg',

        title: 'Blouse',

        description: 'Cotton Blue Blouse',

        price: 22

    }),
    new Product({

        imagePath: 'https://i.imgur.com/kN2laTm.jpg',

        title: 'Blouse',

        description: 'Cotton Blue Blouse',

        price: 22

    }),
    new Product({

        imagePath: 'https://i.imgur.com/0hy0ESS.jpg',

        title: 'Top',

        description: 'Black Glitter Top',

        price: 22

    }),
    new Product({

        imagePath: 'https://i.imgur.com/Pq6RqML.jpg',

        title: 'Top',

        description: 'Black Glitter Top',

        price: 22

    }),
    new Product({

        imagePath: 'https://i.imgur.com/HeQrr9S.jpg',

        title: 'Dress',

        description: 'Black Chic',

        price: 22

    }),
    new Product({

        imagePath: 'https://i.imgur.com/r2p02xH.png',

        title: 'Dress',

        description: 'Red',

        price: 22

    }),
    new Product({

        imagePath: 'https://i.imgur.com/hV2TNAs.jpg',

        title: 'Dress',

        description: 'Red',

        price: 38

    }),
    new Product({

        imagePath: 'https://i.imgur.com/MJudKDn.jpg',

        title: 'Dress',

        description: 'Pretty Dress',

        price: 29

    }),
    new Product({

        imagePath: 'https://i.imgur.com/j58eSwn.jpg',

        title: 'Dress',

        description: 'Pretty Dress',

        price: 55

    }),
    new Product({

        imagePath: 'https://i.imgur.com/dJgNpVs.jpg',

        title: 'Dress',

        description: 'Casual Yellow Dress',

        price: 26

    }),

    new Product({

        imagePath: 'https://i.imgur.com/4xSXrFM.jpg',

        title: 'Dress',

        description: 'Formal Dress',

        price: 26

    }),
    new Product({

        imagePath: 'https://i.imgur.com/B1jOyLk.jpg',

        title: 'Dress',

        description: 'Formal Dress',

        price: 26

    }),
    new Product({

        imagePath: 'https://i.imgur.com/yNVXw2j.jpg',

        title: 'Dress',

        description: 'Wedding Dress',

        price: 226

    }),
    new Product({

        imagePath: 'https://i.imgur.com/fJUCguh.jpg',

        title: 'Dress',

        description: 'Dress',

        price: 76

    }),
    new Product({

        imagePath: 'https://i.imgur.com/PKL5BdP.jpg',

        title: 'Dress',

        description: 'Orange Dress',

        price: 26

    })


];



var done = 0;

for (var i = 0; i < products.length; i++) {

    products[i].save(function(err, result) {

        done++;

        if (done === products.length) {

            exit();

        }

    });

}



function exit() {

    mongoose.disconnect();

}