//evento para quando mouse entrar
$('table tbody tr').mouseenter(function(){

    $(this).addClass('trselected');

});
//evento para quando mouse sair
$('table tbody tr').mouseleave(function(){

    $(this).removeClass('trselected');

});

//englobando os 2 eventos acima usando o hover
$('table tbody tr').hover(function(){

    $(this).addClass('trselected');

}, function(){

    $(this).removeClass('trselected');

});

//evento para quando passar o mouse em cima de 1 elemento e mostra a posicao no console
$('table tbody tr').mousemove(function(event){

    console.log(event.pageX, event.pageY);

});

//Evento para quando o mouse passar em cima de 1 elemento, o h1 mostrar a posicao no h1
$('body').mousemove(function(event){

    $('h1').text(`você está na posição x ${event.pageX}; Y ${event.pageY} `);

});