//descobre posicao de 1 elemento
$('form .field:eq(1)').offset() 

//muda posicao
$('form .field:eq(1)').offset({
    top: 5,
    left: 100
});

//retorna ou define a posicao de barra de rolagem
$(document).scrollTop(400);