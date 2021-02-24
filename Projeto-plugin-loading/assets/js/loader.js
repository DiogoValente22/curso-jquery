(function($){

    $.fn.load = function (action = 'load', params) {

        let defaults = {
            divClass: 'spin1'
            // divQtd: 0
        }

        let options = $.extend(defaults, params);

        return this.each(function(){

            switch(action) {

                case 'load':
                    let divToAppend = document.createElement('div');
                    divToAppend.id = 'loader';  

                    let divBox = document.createElement('div');
                    divBox.id = 'box';
            
                    let divLoad = document.createElement('div');
                    divLoad.className = 'loader-' + options.divClass;

                    // for(let i = 0; i <= options.divQtd; i++) {

                    //     $(divLoad).append('<div></div>');

                    // }

                    $(divToAppend).append(divBox);
                    $(divBox).append(divLoad);

                    $(this).before(divToAppend).hide().fadeIn('slow');

                break;

                case 'unload':
                    
                    $('#loader').fadeOut(function(){

                        $(this).remove();

                    })

                break;

                default:
                    console.error('KK MENO DEU ERRO');

            }
            
        });

    }

})(jQuery);