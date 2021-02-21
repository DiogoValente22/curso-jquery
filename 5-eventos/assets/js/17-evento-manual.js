
$('h1').on('dblclick', function(){

    $(this).text('Hcode Treinamentos - jQuery');

});

//acionando um evento manualmente
$('h1').trigger('dblclick');

//
$('#form_login').on('submit', function(e){

    e.preventDefault();

    console.log('aqui estao os valores do form kk: ', $(this).serializeArray());

    $('#form_login [name=bio]').on('blur', function(e){

        $(e.target.form).trigger('submit');

    });
})
