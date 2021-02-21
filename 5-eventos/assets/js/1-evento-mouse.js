// Evento para quando pressionarmos o mouse
$('h1').mousedown(function(){
    console.log('apertei o mouse kkk');
});

// Evento para quando soltarmos o botão do mouse
$('h1').mouseup(function(){
    console.log('soltei o mouse kkk');
});


// evento para quando pressionarmos e soltarmos o btn do mouse
$('h1').click(function(){
    console.log('cliquei')
});

$('h3.books').click(function(){

    $(this).text('Fui clicado');

});

//evento para o botao direito do mouse
$('img').contextmenu(function(){

    alert('cliquei com btn direito');

});

//evento com double click
$('table tbody tr').dblclick(function(){
    $(this).css({
        background: 'black',
        color: 'white'
    });
});

//evento simular um doubleclick pelo console
$('table tbody tr:eq(2)').dblclick();