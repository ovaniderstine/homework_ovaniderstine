$('#foodMore').hide();
$('#productsMore').hide();
$('#shoppingMore').hide();

$(function(){
    
    // Using .toggle()
    $('#heading1').click(function(){
        $('#foodMore').toggle();
    });

    // Using show/hide
    isHidden = true;
    $('#heading2').click(function(){
        if(isHidden)
        {
            $('#productsMore').show();
            isHidden = false;
        } else {
            $('#productsMore').hide();
            isHidden = true;
        }
    });

    // Using .is(':visible')
    $('#heading3').click(function(){
        if($('#shoppingMore').is(':visible'))
        {
            $('#shoppingMore').slideUp();
        } else {
            $('#shoppingMore').slideDown();
        }
    });

});
console.log("file loaded");