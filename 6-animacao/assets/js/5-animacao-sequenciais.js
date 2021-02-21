$('#init_effect').on('click', function(){
                    
    $('.logo').animate({
        marginTop: '+=90px'
    })
    .delay(500)
    .animate({
        marginLeft: '+=300px'
    })
    .queue(function(){
        $('h1').text('Animação concluida').css({
            'color': 'red'
        });
        $(this).dequeue();
    })
    .delay(1000)
    .fadeOut(2000);

    // limpa a fila
    // .clearQueue();

});