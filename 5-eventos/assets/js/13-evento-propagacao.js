// Quando usamos o on no elemento alvo só vai funcionar no momento em que criamos ele.
// Se adicionarmos mais algum elemento, esse evento não ira funcionar, por isso usamos a delegação

// ============= SEM A DELEGAÇÃO ================ //
$('#books_list tbody td').on('click', function(e){

    $('#books_list tbody td').removeClass('trselected');

    $(this).addClass('trselected');

});

//===============================================//

$('#btn_add_book').on('click', function(){

    let tr = `
        <tr>
            <td>Til</td>
            <td>José de Alencar</td>
        </tr>
    `;

    $('#books_list tbody').append(tr);
});

// ============== COM A DELEGAÇÃO e PROPAGAÇÃO ============== //
$('#books_list tbody').on('click', 'td', function(e){

    $(e.delegateTarget).find('tr').removeClass('trselected');

    //$('#books_list tbody td').removeClass('trselected');

    $(this).addClass('trselected');

});