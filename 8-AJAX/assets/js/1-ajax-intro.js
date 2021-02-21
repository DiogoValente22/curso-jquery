// iniciando ajax, vendo se retorna algum erro
$.ajax({
    url: 'http://localhost:3000/books',
    success: function(response){

        console.log(response);

    },
    error: function(err) {

        console.error(err);
    }
});