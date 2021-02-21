//criando nosso proprio filtro que vai selecionar carros com ano > que 2000
$.expr[':'].carsCentury21 = function(el) {

    return ($(el).data('ano') > 2000);
}

//usando o nosso proprio filtro
$('.cars_list li:carsCentury21').css('font-size', '30px')


//criando nosso proprio filtro 2 que vai selecionar carros antes de determinado ano
$.expr[':'].carsBeforeYear = $.expr.createPseudo(function(year){

    return function(el) {

        return ($(el).data('ano') < year);

    }

})
//usando o filtro
$('.cars_list li:carsBeforeYear(1990)').css('color', 'red')

