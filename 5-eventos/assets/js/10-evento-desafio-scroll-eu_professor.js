/* INICIO DO MEU CODIGO */
$(window).scroll(function(){

    let barra = $(window).scrollTop();


    if(barra >= 0 && barra < 50){
        
        $('h1').css('color', 'red');
        $('.books').css('color', 'black');
        $('.register').css('color', 'black');

    }else if(barra >= 50 && barra < 199){
        $('h1').css('color', 'black');
        $('.register').css('color', 'black');
        $('.books').css('color', 'red');

    }else{

        $('h1').css('color', 'black');
        $('.books').css('color', 'black');
        $('.register').css('color', 'red');

    }
    
});
/* FIM DO MEU CODIGO */


/* INICIO CODIGO DO PROFESSOR (ja está funcionando porem tem como melhorar)*/

$(window).scroll(function(){

    let position = $(window).scrollTop()

    let sections = ['.title', '.books', '.register'];

    let el;

    if(position < 50) {
        el = $(sections[0]);
        sections.splice(0, 1);
    }else if (position < 200){
        el = $(sections[1]);
        sections.splice(0, 1);
    }else if (200 < position < 400) {
        el = $(sections[2]);
        sections.splice(0, 1);
    }

    $(el).addClass('selected_section');

    $(sections.join(', ')).removeClass('selected_section');

});

/* FIM CODIGO DO PROFESSOR */


/* INICIO CODIGO DO PROFESSOR (codigo refatorado)*/

$(window).scroll(function(){

    let position = $(window).scrollTop()

    let sections = ['.title', '.books', '.register'];

    let index;

    if(position < 50) {
        index = 0;
    }else if (position < 200){
        index = 1;
    }else if (200 < position < 400) {
        index = 2;
    }

    $(sections[index]).addClass('selected_section');

    sections.splice(index, 1);

    $(sections.join(', ')).removeClass('selected_section');

});

/* FIM CODIGO DO PROFESSOR */
