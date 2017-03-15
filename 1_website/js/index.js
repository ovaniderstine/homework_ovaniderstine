$(function(){
    var products    = ['hoodie', 'socks', 'jeans', 'elephant', 'hat', 'pet rocks', 'whales'];
    var prices = [60, 10, 100, 2000, 30, 1, 5000];
    var cartCounter = [];
    var total = 0;

    //Add products to the store
    for(var i = 0; i < products.length; i++)
    {
        var string = "";

        string += '<li class="list-group-item clearfix">';
        string += '<img class="img-thumbnail" src="./images/elephant.jpg">';
        string += products[i];
         string += '<button class="btn btn-danger btn-xs pull-right btn-remove" value=' + i + '>Remove from Cart</button>';
        string += '<button class="btn btn-success btn-xs pull-right btn-product" value=' + i + '>Add to Cart</button>';
        string += '</li>';

        $('#products').append(string);

        //Set the cart counter to 0 for that this index
        cartCounter.push(0);
    }

  //Add product to cart counter when a button is clicked
 $('#products').on('click', '.btn-product', function(){
        var index = $(this).val();
        cartCounter[index]++;
        var price = prices[index];
        total = total + price;
        console.log(total);
    });

 //Remove product from cart counter when button is clicked
 $('#products').on('click', '.btn-remove', function(){
        var index = $(this).val();
        cartCounter[index]--;
    });

    //View cart event
    $('#viewCart').on('click', function(){
        //Clear the cart
        $('#cartContents').html('');

        //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var count = cartCounter[i];
            if(count > 0) {
                var string = "";
                var price = prices[i];

                string += '<li class="list-group-item clearfix">';
                string += products[i];
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '<span class="badge badge-pill badge-primary">' + (count * price) + '</span>';
                string += '</li>';

                $('#cartContents').append(string);
            }
        }
    });


});

$('#myButton').click(function(){
    $('#myModal').modal();
});
