/**
 *
 *
 *
 **/
 
(function ($)
{

    'use strict';


    
    // Configurando o requireJS
    var capaEspeciaisReq = require.config({
    
        'paths':    {

        //  Lib
            'jquery':       'http://especiais.zh.clicrbs.com.br/src/js/lib/jquery/jquery-3.2.0.min'
           
        //  UI
        ,   'zh-3d-slider': 'ui/zh-3d-slider-0.0.0'

        }

    });
    
    

    
//        .==.        .==.          
//       //`^\\      //^`\\         
//      // ^ ^\(\__/)/^ ^^\\        
//     //^ ^^ ^/6  6\ ^^ ^ \\       
//    //^ ^^ ^/( .. )\^ ^ ^ \\      
//   // ^^ ^/\| v""v |/\^ ^ ^\\     
//  // ^^/\/ /  `~~`  \ \/\^ ^\\    
//  -----------------------------
// HERE BE DRAGONS
    
    capaEspeciaisReq(

    [
    
        'require'
    ,   'jquery'
        
    ],
    
    function (require, $)
    {

        'use strict';
        
        
        
        var $slider3D;
        
        
        
        
        
        var buildUI =   function ()
        {
        
            require(['jquery', 'zh-3d-slider'], function ($)
            {
                
                $slider3D.ZH3DSlider();
                
            });
        
        };
        
        
        
        var capture =   function ()
        {
            
            $slider3D   =   $('.zh-3d-slider').first();
            
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
    
        $(function ()
        {
            
            capture();
            
            buildUI();

        });

    }); 

    
    
})();

