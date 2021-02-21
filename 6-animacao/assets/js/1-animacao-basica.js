// esconde algum elemento
$('.courses_list div:first').hide(2000)//em ms

//exibir elemento
$('.courses_list div:hidden').show(2000)

//funciona como se fosse um interruptor, nesse caso vai mudar de hide pra show o elemento e vice versa
$('.courses_list div:first').toggle()

//escondendo e exibindo itens
$('.btn_toggle_item').on('click', function(){
                    
    $(this).prev('.course_item_inner').toggle(2000);

});