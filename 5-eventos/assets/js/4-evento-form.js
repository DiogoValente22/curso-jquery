//evento para quando o elemento receber o foco
$('[name]').focus(function(){

    $(this).css('background', 'yellow');

});

//evento para quando o elemento perder o foco
$('[name]').blur(function(){

    alert('vc digitou ' + $(this).val());

});

// evento para quando um elemento receber o foco msm que seja um elemento filho
$('.form-group').focusin(function(){

    console.log("vc selecionou um campo do form groupkkkj");

});

// evento para quando um elemento receber o foco msm que seja um elemento filho
$('.form-group').focusout(function(){

    console.log("kk vc deixou um foco de um elemento");

});

