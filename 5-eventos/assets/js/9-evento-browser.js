// evento para quando o navegador mudar seu tamanho
$(window).resize(function(){

    console.info(`a largura é: ${$(window).width()}. A altura é ${$(window).height()}`);

});

//evento para quando mover o scroll
$(window).scroll(function(){

    console.log(`você está na posicao ${$(window).scrollTop()}`);

});