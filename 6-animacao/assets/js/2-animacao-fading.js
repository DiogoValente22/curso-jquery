// escondendo um elemento com a animação "fading"
$('.courses_list .course_item_inner:eq(3)').fadeOut('fast');

// determinando o que vai acontecer quando a animacao terminar, o call back
$('.courses_list .course_item_inner:eq(3)').fadeIn(2000,function(){

    $(this).css('border', 'solid red 2px');

});

// Alterando a opacidade de um elemento com uma animação
$('.logo img').fadeTo(1000, 0.9)  // parametros(tempo em ms, opacidade)

// 
$('.btn_toggle_item').on('click', function(){
                    
    $(this).prev('.course_item_inner').fadeToggle('slow', function(){

        console.log("sumi ou apareci");

    });

});

// vai fazer sumir ou aparecer o conteudo em cima do btn
$('.btn_toggle_item').on('click', function(){
                    
    $(this).prev('.course_item_inner').toggle(500);

});