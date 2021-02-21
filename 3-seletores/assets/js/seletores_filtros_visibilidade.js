//seleciona todos li que estão invisivels (display none)
$('.cars_list li:hidden').show();

//evento para mostrar os carros escondidos
$('#show_cars').click(function(){

    $('.cars_list li:hidden').css('text-decoration', 'underline').show()

})

//evento esconder os carros escondidos
$('#hide_cars').click(function(){

    $('.cars_list li:visible').hide();

})