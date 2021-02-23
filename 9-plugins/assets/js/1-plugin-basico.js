
$.fn.changeText = function() {

    this.css('font-size', '50px');

    // com esse return eu posso fazer uma fila de mudanças
    // ex: $('h1').changeText().css() etc....
    return this;

}

$(() => {



})