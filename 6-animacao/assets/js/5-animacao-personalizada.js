// animacao personalizada. obs: aceita apenas valores numericos
$('h1').animate({
    fontSize: '50px'
});

//ex 2
$('.course_item h4').on('click', function(){

    $(this).animate({
        wordSpacing: '+=5px'
    }, 2000);

});

//ex 3
$('.course_item').on('click', function(){

    $(this).animate({
        padding: '+=20px'
    },1500);

});

//ex 4
$('footer p').on('click', function(){

    $(this).animate({
        letterSpacing: '+=10px'
    }, 2000, function(){ // função de callback para quando a função acabar
        alert('Aumentou o espaçamento das letras kk');
    });

});