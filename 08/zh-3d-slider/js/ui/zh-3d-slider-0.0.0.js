define('zh-3d-slider', 

[
    'jquery'
], 

function ($)
{

    'use strict';
    
    
    
    
    var DEFAULTS    =   {
        
        'infinite': true
        
    };
    
    
    
    $.fn.ZH3DSlider =   function (options)
    {
    
        var $root       =   $(this)
        ,   settings    =   $.extend({}, DEFAULTS, (options || {}))
        ,   $previousButton
        ,   $nextButton
        ,   $items
        ,   total   =   0
        ,   nowAt   =   1;
        
        
        
        
        
        var bind =   function ()
        {
            
            $previousButton.on  ('click',   previous);
            $nextButton.on      ('click',   next);
 
        };
        
        
        
        var capture =   function ()
        {
            
            $previousButton =   $root.find('.zh-3d-slider-previous');
            $nextButton     =   $root.find('.zh-3d-slider-next');
            
            $items  =   $root.find('.zh-3d-slider-item');
            
            if ((! $items) || (! $items.length)) {
                $.error('Não foram encontrados itens para o slider 3D');
            }
            
            total    =  $items.length;
            
            if (! total) {
                $.error('Não foram encontrados itens para o slider 3D');
            }
            
        };
        
        
        
        var next    =   function (event)
        {
            
            event.preventDefault();
            event.stopPropagation();
            
            var next    =   nowAt;
                next ++;
            
            if (next > total) {
            
                if (settings.infinite) {
                    next   =   1;
                } else {
                    next --;
                }
            
            }
            
            if (next != nowAt) {
                
                nowAt   =   next;
                setPosition(nowAt);
                
            }
            
        };
        
        
        var previous    =   function ()
        {
            
            event.preventDefault();
            event.stopPropagation();
            
            var next    =   nowAt;
                next --;
            
            if (next <= 0) {
            
                if (settings.infinite) {
                    next   =   total;
                } else {
                    next ++;
                }
            
            }
            
            if (next != nowAt) {
                
                nowAt   =   next;
                setPosition(nowAt);
                
            }
            
        };
        
        
        
        var removePosition  =   function ()
        {
        
            $root.removeClass('zh-3d-slider-at-1 zh-3d-slider-at-2 zh-3d-slider-at-3 zh-3d-slider-at-4 zh-3d-slider-at-5');
        
        };
        
        
        
        var setPosition =   function (position)
        {
            
            if ((! position) || (isNaN(position))) {
                position    =   nowAt;
            }
            
            console.debug(position);
            
            removePosition();
            $root.addClass('zh-3d-slider-at-' + position);
            
        };
        
        
        
        

//        .==.        .==.          
//       //`^\\      //^`\\         
//      // ^ ^\(\__/)/^ ^^\\        
//     //^ ^^ ^/6  6\ ^^ ^ \\       
//    //^ ^^ ^/( .. )\^ ^ ^ \\      
//   // ^^ ^/\| v""v |/\^ ^ ^\\     
//  // ^^/\/ /  `~~`  \ \/\^ ^\\    
//  -----------------------------
// HERE BE DRAGONS        
        capture();
        bind();
        
        
    
    };

});
