//criando uma situação de vagas de cadastro, quando não houver mais vagas, irei parar o evento de clique 

let entries = 100;

$('.register').append(`<u> - ainda restam ${100 - entries} vagas`)

$('#form_login [type=submit]').on('click', function(e){

    e.preventDefault();

    alert('você foi cadastrado. parabens kk!!');

});

if(entries >= 100){
    //desabilita o evento de click qd n houver mais vagas
    $('#form_login [type=submit]').off('click');
}