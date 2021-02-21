//verificando se possui um atributo / vai trocar o texto dos links no header por "link"
$('.header-border li [href]').text('link');

//dessa vez apenas o link que tiver o atributo 'title' vai ser mudado o texto
$('.header-border li [href][title]').text('link');

//pegar o valor especifico do atributo
$('.header-border li [href="about.html"]').text()

//Verificando os atributos que começam com uma letra especifica
$('.header-border li [href^="h"]').text()

//Verificando os atributos que terminam com uma expressao ou letra
$('.header-border li [href$="html"]').text()

//Verificando os atributos tem uma parte do que foi escrito
$('.header-border li [href*="about"]').text()
