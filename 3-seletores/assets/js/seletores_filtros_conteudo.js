//Selecionando um elemento pelo seu conteudo. Lembrando: é case sensitive
$('.menu li:contains(About)').css('outline', 'solid red 2px')

//seleciona um elemento que não tenha conteudo
$('.cars_list li:empty').text('vazio').css({
    'background': 'red',
    'color': 'white'
});

//vai selecionar todos os li que possuem valor, e adicionar vai adicionar a tag span
$('.cars_list li:parent').append('<span style="color: green;"> - Tem valor </span>')

//vai selecionar todos os li que contém um span dentro
$('.cars_list li:has(span)').animate({
    fontSize: '30px',
    opacity: 0.7
}, 2000)