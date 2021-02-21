//removendo elementos
$('.cars_list li:eq(1)').remove()

//removendo o CONTEUDO do elemento
$('.cars_list li:eq(1)').empty()

//remover elementos em volta de outro
$('.cars_list li').unwrap();

//add elementos em volta de outro
$('.cars_list li').wrap('<i></i>');

//evento para remover e depois add elemento com todos os "efeitos" ou atributos colocados
$('.paragrafo').click(function(){

    $(this).html('Você clicou em mim!')

});

let txt = $('.paragrafo').detach();

$('section main p').before(txt);

