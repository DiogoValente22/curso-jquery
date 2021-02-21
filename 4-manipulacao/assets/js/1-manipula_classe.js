//adicionando uma classe em algum elemento
$('header .menu ul li:last a').addClass('stylized_menu')

//removendo uma classe em algum elemento
$('header .menu ul li:last a').removeClass('stylized_menu')

//ao clicar no link, vai alternar a classe stylized com nenhuma classe
$('header .menu ul li a').click(function(event){
                    
    event.preventDefault();

    $(this).toggleClass('stylized_menu');

});

//verificando se um elemento possui uma classe
$('header .menu ul li:last a').hasClass('stylized_menu')

//faz um foreach para procurar se determinada tag p possui a classe paragrafo
$('p').each(function(){

    if ($(this).hasClass('paragrafo')){
        $(this).append('<span style="color: green;"> - Eu tenho a classe paragrafo =) </span>')
    }else{
        $(this).append('<span style="color: red;"> - Eu não tenho a classe paragrafo =(</span>')
    }

});