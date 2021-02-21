$('#form_login').on('change', '[name]', function(){

    alert('Elemento mudou. Seu valor: ' + $(this).val());

});

$('#form_login [name=bio]').on('change', function(e){

    // vai parar a propagração e apenas vai mudar o background, n vai aparecer mais o alerta
    e.stopPropagation();

    $(this).css('background', 'red');

});
