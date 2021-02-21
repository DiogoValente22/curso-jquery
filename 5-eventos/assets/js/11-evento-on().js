//usando evento on para clicar e posso utilizar mais de 1 evento usando o on

$('#books_list tbody td').on('click contextmenu', function(e){

    if(e.type == 'contextmenu') e.preventDefault();

    $('#books_list tbody td').css({
        backgroundColor: 'initial',
        color: 'initial'
    });

    $(this).css({
        backgroundColor: 'black',
        color: 'white'
    });

});