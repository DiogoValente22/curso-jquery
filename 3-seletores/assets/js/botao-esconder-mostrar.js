//Botão para esconder ou mostrar os carros

$('#toggle_cars').click(function(){

    let hiddenCars = $('.cars_list li:hidden').length;
    let method = (hiddenCars > 0) ? 'show' : 'hide'; // funciona como um if else
    
    eval(`$('.cars_list li').${method}()`);
})