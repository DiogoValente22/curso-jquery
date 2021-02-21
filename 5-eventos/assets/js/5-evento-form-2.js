$('[name]').change(function(){
    console.log(`valor do campo: ${$(this).val()}`)
});

//selecionar algo que eu marcar com o mouse
//talvez usar em 1 futuro projeto de edição de texto
$('[name]').select(function(){
    console.log('vc selecionou o valor deste campo');
});

//evento quando der submit no form
$('form').submit(function(){
    
    console.log($(this).serializeArray());

});