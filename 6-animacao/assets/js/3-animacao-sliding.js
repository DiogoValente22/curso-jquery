// escondendo um elemento com o efeito de slide
$('.courses_list .course_item_inner:eq(4)').slideUp('fast');

// exibindo um elemento com slide
$('.courses_list .course_item_inner:eq(4)').slideDown(1000); // 1s ou 1000ms

//fazendo os 2 ao msm tempo com toggle

$('.btn_toggle_item').on('click', function(){
    
    $(this).prev('.course_item_inner').slideToggle(3000, function(){

        console.log("sumi ou apareci");

    });

});
