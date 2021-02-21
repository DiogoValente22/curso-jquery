//ao clicar no ULTIMO elemento da lista, ira disparar o alert
$('.cars_list li:last').click(function(){
    alert('ok');
})

//ao clicar no PRIMEIRO elemento da lista, ira disparar o alert
$('.cars_list li:first').click(function(){
    alert('ok');
})

//Selecionando elementos de maneira alternada impar (deixa um item branco outro cinza etc)
$('.cars_list li:even').css('background-color', '#ccc');

//Selecionando elementos de maneira alternada par (deixa um item branco outro cinza etc)
$('.cars_list li:odd').css('background-color', '#ccc');

//Selecionando elementos de maneira especifica par (deixa um item branco outro cinza etc)
$('.cars_list li:eq(0)').css('font-size', '40px');