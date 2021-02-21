//clonando elemento

$('.title').click(function(){

    $(this).css('outline', '5px solid red');

});

let el = $('.title').clone(); //se for passado o parametro true o evento tambem é copiado

el.appendTo('section main');