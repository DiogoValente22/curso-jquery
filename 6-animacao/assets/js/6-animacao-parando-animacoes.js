$('#stop_effect').on('click', function(){

    // 1 parametro: para a animação onde está e nao executa mais nenhuma
    // 2 parametro: para a animação no final e a animacao vai para o estado final
    //$('.logo').stop(true, true);

    $('.logo').finish();

});