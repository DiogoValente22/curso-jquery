//evendo vai acontecer apenas uma vez usando o "one"
$('.books').append('<u> - Marque seus favoritos (essa ação não pode ser desfeita)</u>');

$('#books_list tbody tr').one('click', function(){

    if (!$(this).hasClass('trselected')){
        $(this).addClass('trselected')
    } else {
        $(this).removeClass('trselected');
    }

});