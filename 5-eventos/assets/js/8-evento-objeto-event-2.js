$('[name=bio]').keydown(function(e){

    //retorna o codigo da tecla pressionada
    console.log(e.keyCode);
    console.log(e.which);

    //retorna a tecla pressionada (nome)
    console.log(e.key);

    //exemplo usando o e.key
    if (e.key === 'Enter'){
        e.preventDefault();
        alert('vc pressionou a tecla enter');
    }

    // para a execução padrão de eventos
    e.preventDefault();

    //para a propagação de eventos
    e.stopPropagation();

});