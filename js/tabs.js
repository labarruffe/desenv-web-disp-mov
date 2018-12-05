;(function ($, undefined)
{

    'use strict';
    
    
    
    /**
     *
     *  Isso significa que eu posso chamar o método tabs de um objeto jQuery 
     *  para transformá-lo em um componente de tabs, com todos os comportamentos 
     *  descritos aqui
     *
     **/
     
    $.fn.tabs   =   function ()
    {
        
        //  Elemento raíz
        var $tab    =   $(this);
        
        // Controles e displays em cada tabs
        var $controls   =   $tab.find('[data-role="tabs-control"]')
        ,   $displays   =   $tab.find('[data-role="tabs-display"]');
        
        //   Desabilita primeiro bcontrole
        $controls.removeClass('w3-disabled').first().addClass('w3-disabled');
        
        // Esconde todas as abar e só mostra a primeira
        $displays.addClass('w3-hide').first().removeClass('w3-hide');
        
        $controls.on('click tap', function ()
        {
        
            var $activeTab  =   $(this)
            ,   index       =   parseInt($activeTab.attr('data-index'));
            
            //  Tira de todos a classe desabilitada e bota no clicado
            $controls.removeClass('w3-disabled');
            $activeTab.addClass('w3-disabled');
            
            // Esconde todas as tabs menos a que queremos
            $displays   .addClass('w3-hide')
                        .filter('[data-index="' + index + '"]')
                        .removeClass('w3-hide');
        
        });
        
    };

    



    // NA inicialização já peço pra contruir todas as tabs
    $(function ()
    {
        
        $('[data-role="tabs-component"]').each(function (i, $tabComponent)
        {
            
            //  Chamei o método tabs de um objeto jQuery (feito com seletor)
            $($tabComponent).tabs();
            
        });
        
    });
    
})($);
