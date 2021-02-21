//============================== PARTE 1 ===========================//

//seleciona um botão do form #register e exibe o texto
// com os : aplicara para todo button, tanto pra tag tanto pra atributo type button
// sem os : aplicara só para a tag button
$('#register :button').text()

//selecionando um checkbox
$('#register :checkbox').trigger('click')

//seleciona o radio
$('[type=radio]').change(function(){

    let value = $('input:checked').val();
    let gender = (value == 'M')? 'Masculino' : 'Feminino';

    alert(`Você selecionou o sexo ${gender}`);

});


//============================== PARTE 2 ===========================//

//
$('#register :disabled').val('Diogo@outlook.com').prop('disabled', false)

//focus nos input
$('input').focus(function(){

    $('input:focus').val('Olá, você clicou aqui!');

})

//
$('#register :submit').click(function(event){

    event.preventDefault();

    console.log("você clicou no botão submit")

})


