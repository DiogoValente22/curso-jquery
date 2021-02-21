//evento para quando pressionarmos uma tecla
$('#form_login [name=username]').keydown(function(){

    console.log(`vc apertou a tecla com um código ${event.keyCode}`);

});

//evento para quando soltamos uma tecla
$('#form_login [name=username]').keyup(function(){

    console.log(`vc apertou a tecla com um código ${event.keyCode}`);

});

//igual ao key down, porem n pega teclas "especiais" como o shift, del, esc, etc...
$('#form_login [name=username]').keypress(function(){

    console.log(`vc apertou a tecla com um código ${event.keyCode}`);

});