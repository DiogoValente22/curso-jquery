// obs: eu posso colocar oq quiser como parametro da funcao ($) q poderei usar para falar que é o jquery
(function($){

    $.fn.changeText = function() {

        this.css('font-size', '50px');

        return this;

    }

})(jQuery);