//add um elemento ao final de outro 
$('.menu ul').append('<li><a href="#">News</a></li>');

//add um elemento ao final de outro em outra sintaxe
$('<li><a href="#">News 2</a></li>').appendTo('.menu ul');

//add um elemento no inicio de outro 
$('.menu ul').prepend('<li><a href="#">Products</a></li>');

//add um elemento no inicio de outro em outra sintaxe
$('<li><a href="#">News 2</a></li>').prependTo('.menu ul');

//add um elemento ao final de outro 
$('.menu ul').append('<li><a href="#">News</a></li>');

//add um elemento após outro
$('.paragrafo').after('<h2>blabla</h2>')

//add um elementou após outro sintaxe diferente
$('<h2>blabla</h2>').insertAfter('.paragrafo')

//add um elemento antes de outro
$('.paragrafo').before('<h2>Introdução</h2>')

//add um elementou antes outro sintaxe diferente
$('<h2>blabla</h2>').insertBefore('.paragrafo')

//add elemento em volta de outro elemento
$('.cars_list li').wrap('<i></i>');

//add elemento em volta do conteudo de outro
$('.cars_list li').wrapInner('<i></i>');

