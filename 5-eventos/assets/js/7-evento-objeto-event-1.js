//
$('form').submit(function(event){

    event.preventDefault();

    console.log($(this).serializeArray());

});

$('p').click(function(e){

    //retorna o tipo de evento executado
    console.log('vc realizu um evento de ' + e.type);

    //retorna o nome do elemento que clicamos
    alert(`vc clicou em uma tag <${e.target.localName}>`);

    //o Target é exatamente onde eu cliquei
    console.log('TARGET', e.target);
    //o current target é onde eu defini o evento, na tag P
    console.log('CURRENT TARGET', e.currentTarget);


});