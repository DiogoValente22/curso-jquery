//Retornando ou definindo os dados de 1 elemento (data)
$('.cars_list li').click(function(){
    console.log(`Esse carro é do ano de ${$(this).data('ano')}`);
});
//
$('.cars_list li:first').data('ano', '3000');