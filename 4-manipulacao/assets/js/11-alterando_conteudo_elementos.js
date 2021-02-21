//retornando o conteudo html de um elemento
$('header .menu li:eq(1)').html();

//mudar o conteudo html de um elemento
$('header .menu li:eq(1)').html('<a href="https://www.youtube.com">Home</a>');

//retornando o conteudo de texto de um elemento
//html retorna o 1 elemento, o text retorna 1 ou mais elementos
$('header .menu li:eq(2)').text();

//definindo o conjteudo de texto de um elemento
$('header .menu li:eq(2) a').text('bla bla bla');

//mudando o elemento por outro elemento (button por h4)
$('form button').replaceWith('<h4 style="color: red; text-align: center">Registre-se</h4>');

//
$('<h4 style="color: red; text-align: center">Registre-se</h4>').replaceAll('form button');

