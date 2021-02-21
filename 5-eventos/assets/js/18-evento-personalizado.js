//evento personalizado
$('header').on('initPage', function(){
                
    $(this).find('h1').append(' - seja bem-bindo!').css({
         color: 'blue',
         left: '100px',
         transition: '2s'
    });

    $(this).find('img').animate({
        width: '400px',
        transition: '3s'
    });

 });

 //quando iniciar a pagina, após 1,5s, a animação acima vai acontecer
 setTimeout(function(){

     $('header').trigger('initPage');

 }, 1500);