$('p').on('click.colorRed', function(){

    $(this).toggleClass('selected_section');

})

$('p').on('click', function(){

    $(this).toggleClass('underline_section');

});

$('#btn-remove-css-color').on('click', function(){

    $('p').off('click.colorRed');

});