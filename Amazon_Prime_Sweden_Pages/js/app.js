$(function () {
    //define products to put in products list 
    var products = [
        { name: 'Girl\'s Fashion', price: 39.99, id: 1, description: 'Midi/Knee Length', picture: 'images/pg1.jpg', category: 'Casual Dress' },
        { name: 'Girl\'s Fashion', price: 24.99, id: 2, description: 'Midi/Knee Length', picture: 'images/pg2.jpg', category: 'Casual Dress' },
        { name: 'Girl\'s Fashion', price: 27.99, id: 3, description: 'Midi/Knee Length', picture: 'images/pg3.jpg', category: 'Party Dress' },
        { name: 'Girl\'s Fashion', price: 25, id: 4, description: 'Top & Skirt Set', picture: 'images/pg4.jpg', category: 'Girls Party' },
        { name: 'Girl\'s Fashion', price: 35, id: 5, description: 'Girl\'s Full Length', picture: 'images/pg5.jpg', category: 'Party Dress' },
        { name: 'Girl\'s Fashion', price: 18, id: 6, description: 'Midi/Knee Length', picture: 'images/pg6.jpg', category: 'Party Dress' },
       
        { name: 'Boy\'s Fashion', price: 29.99, id: 7, description: 'Waistcoat, Shirt & Jeans', picture: 'images/pb1.jpg', category: 'Boys Casual' },
        { name: 'Boy\'s Fashion', price: 18.99, id: 8, description: 'Blazer, Shirt & Trouser', picture: 'images/pb2.jpg', category: 'Boys Casual' },
        { name: 'Boy\'s Fashion', price: 17.99, id: 9, description: ' Shirt & Jeans', picture: 'images/pb3.jpg', category: 'Boys Casual' },
        { name: 'Boy\'s Fashion', price: 19.99, id: 10, description: 'T.Shirt & Solid Denim', picture: 'images/pb4.jpg', category: 'Dungaree Casual' },
        { name: 'Boy\'s Fashion', price: 19.99, id: 11, description: 'Pyjama Set', picture: 'images/pb5.jpg', category: 'Festive Kurta' },
        { name: 'Boy\'s Fashion', price: 18.99, id: 12, description: 'Pyjama Set', picture: 'images/pb6.jpg', category: 'Festive Kurta' },
    ];
    //define shopping cart
    var cart = [];
    //put products in products list
    var appendList = function (array, location) {
        var template = array.map(function (item, id) {
            return `<li class="product col-4">
                <img src="${item.picture}" alt="product image" class="pro-img">
                <div class="product-content">
                <h5 class="price-c">${item.name} -
                    <span class="category">${item.category}</span> <small>${item.price}$</small>
                 </h5>
                  <p>${item.description}</p>
                </div>
                <button type="button" class="btn-add" id="${item.id}">Add to cart</button>
            </li>`;
        });
        $(location).html(template);
    };

    var addToCart = function (array, id, location) { //location .cart-list
        //look for specific ID
        var a = array.find(function (i) {
            return i.id === id;
        });

        //adding products in Cart Array and show them in homesite.
        cart.push(a);

        var item = `
        <li class="item" id="${a.id}">
            <h6>${a.name}</h6>
            <button type="button" class="btn-x">X</button>
        </li>
        `;

        $('span.amount').text(cart.length);
        $(location).append(item);

    };
    //delete products from shopping cart
    var removeFromCart = function (array, removedItem) {
        array.splice(removedItem, 1);
    };

    //uppdate the Cart after removing the item
    var populateCart = function (array, location) {
        var item = `

        <li class="item" id="${array.id}">
            <h4>${array.name}</h4>
            <button type="button" class="btn-x>X</button>
        </li>
        `;

        $('span.amount').text(array.length);
    };

    appendList(products, $('.product-list'));

    $('.product').on('click', 'button', function (event) {
        //button Id.
        var id = $(this).attr('id');
        addToCart(products, +id, $('.cart-list'));
    });

    // To remove from Cart
    $('.cart-list').on('click', 'button', function (e) {
        //Item is a list item in Cart
        var item = $(e.currentTarget).closest('li').remove();
        //Delete from cart
        removeFromCart(cart, item);
        // adding to cart again
        populateCart(cart, $('.cart-list'));
    });

});