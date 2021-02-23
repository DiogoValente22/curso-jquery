(function($){

    $.fn.changeText = function(params) {

        let defaults = {
            fontSize: 30,
            color: '#ccc',
            fontFamily: 'Verdana'
        };

        let options = $.extend(defaults, params)

        return this.each(function(){

            $(this).css({
                'font-size': options.fontSize + 'px',
                'color': options.color,
                'font-family': options.fontFamily
            });

        });

    }

})(jQuery);



$(() => {

    $('h1').changeText({
        fontSize: 40,
        fontFamily: 'Arial'
    })


})