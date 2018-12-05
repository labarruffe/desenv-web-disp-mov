/**
 *
 *  Função anônima auto-invocada para isolar o escopo do JavaScript
 *
 **/
 
;(function ()
{

    'use strict';
    
    
    
    /**
     *
     *  CONSTANTES
     *
     **/
    var DISABLED_CLASS  =   'w3-disabled'; 
     
     
     
     
     
    /**
     *
     *  VARIÁVEIS GLOBAIS
     *
     **/
    var $previousButton // Botão de slide anterior
    ,   $indexButton    // Botão de voltar ao início da aula
    ,   $nextButton;    // Botão de próximo slide
     
     
    
    
    
    /**
     *
     *  Função que adiciona uma classe CSS a um element
     *
     **/
     
    if (! window.addClass) {
        
        window.addClass =   function    (element, className)
        {

            // Chacando as condições mínimas para executar
            if ((! (element instanceof HTMLElement))
            ||  (! className)
            ||  (typeof(className) !== 'string')
            ||  (! className.length)) {
                return;
            }
            
            // Remove a class (evita duplicações)
            removeClass(element, className);
            
            // Acrescenta a nova classe no final, com um espaço antes
            element.className = (element.className.replace(/\s+/gi, ' ').trim() + ' ' + className);

        };
    
    }

    
    
    /**
     *
     *  Função que remove uma classe CSS a um element
     *
     **/
     
    if (! window.removeClass) {
         
        window.removeClass  =   function    (element, className)
        {

            // Chacando as condições mínimas para executar
            if ((! (element instanceof HTMLElement))
            ||  (! className)
            ||  (typeof(className) !== 'string')
            ||  (! className.length)) {
                return;
            }
            
            // Expressão regular para encontrar a classe
            var regexp	=	new RegExp('(^|[\\s]+)' + className + '([\\s]+|$)', 'g');
            
            // Substituindo as ocorrências
            element.className = element.className.replace(regexp, ' ').replace(/\s+/gi, ' ').trim();

        };
         
    }

    
        
        
        
    /**
     *
     *  Função que captura os elementos de interface
     *
     **/
    var capture =   function ()
    {
        
        // Capturo o menu de cima, para atalhar nas próximas queryes
        var $topNav     =   document.querySelector('#top-nav');

        $previousButton =   $topNav.querySelector('#previous-button');
        $indexButton    =   $topNav.querySelector('#index-button');
        $nextButton     =   $topNav.querySelector('#next-button');
        
    };
    
    
    
    /**
     *
     *  Função que binda os elementos às suas funções
     *
     **/
    var bind    =   function ()
    {
        
        // Nothing to bind
        
    };

    
    
    /**
     *
     *  Função que arruma o menu conforma as meta-tags de cada página
     *
     **/
    var setupMenu   =   function ()
    {
        
        // Capturo as meta-tags do <head>
        var $metas   =   {
            'author':       document.head.querySelector('meta[name="slide-author"]')
        ,   'discipline':   document.head.querySelector('meta[name="slide-discipline"]')
        ,   'class':        document.head.querySelector('meta[name="slide-class"]')
        ,   'number':       document.head.querySelector('meta[name="slide-number"]')
        ,   'of':           document.head.querySelector('meta[name="slide-of"]')
        ,   'previous':     document.head.querySelector('meta[name="slide-previous"]')
        ,   'next':         document.head.querySelector('meta[name="slide-next"]')
        };
        
        
        // Pegamos os valores que interessam
        var metaValues  =   {
            'author':       ((null != $metas.author)        ?   ($metas.author.content)             :   (''))
        ,   'discipline':   ((null != $metas.discipline)    ?   ($metas.discipline.content)         :   (''))
        ,   'class':        ((null != $metas['class'])      ?   (parseInt($metas['class'].content)) :   (-1))
        ,   'number':       ((null != $metas.number)        ?   (parseInt($metas.number.content))   :   (-1))
        ,   'of':           ((null != $metas['of'])         ?   (parseInt($metas['of'].content))    :   (-1))
        ,   'previous':     ((null != $metas.previous)      ?   ($metas.previous.content)           :   (''))
        ,   'next':         ((null != $metas.next)          ?   ($metas.next.content)               :   (''))
        };
        
        //  Habilita o botão de index e slide anterior
        if (metaValues.number > 0) {
            
            removeClass($indexButton,           DISABLED_CLASS);
            
            if ((metaValues.previous) 
            &&  (metaValues.previous.length)) {
                
                $previousButton.href    =   metaValues.previous; 
                removeClass($previousButton,    DISABLED_CLASS);
                
            }
            
        }
        
        //  Habilita o botão de próximo slide
        if ((metaValues.number < (metaValues['of'] - 1)) 
        &&  (metaValues.number >= 0)) {
            
            if ((metaValues.next) 
            &&  (metaValues.next.length)) {
                
                $nextButton.href    =   metaValues.next; 
                removeClass($nextButton,        DISABLED_CLASS);
                
            }
            
        }
        
    };
    
     
     
    
    
    /**
     *
     *  Função que despara a execução do script
     *
     **/
    //        .==.        .==.          
    //       //`^\\      //^`\\         
    //      // ^ ^\(\__/)/^ ^^\\        
    //     //^ ^^ ^/6  6\ ^^ ^ \\       
    //    //^ ^^ ^/( .. )\^ ^ ^ \\      
    //   // ^^ ^/\| v""v |/\^ ^ ^\\     
    //  // ^^/\/ /  `~~`  \ \/\^ ^\\    
    //  -----------------------------
    // HERE BE DRAGONS
    var main    =   function ()
    {
    
        // Dá um tempinho esperto para poder carregar as páginas externas
        setTimeout(function ()
        {
            
            // Capturar os elementos
            capture()
        
            // Bindar as funções
            bind();
            
            // Arruma o menu conforma as meta-tags.
            setupMenu();
            
        }
        ,   333);
    
    };
    
    
    
    
    
    // Começando a execução do script de interação ao carregar o DOM
    document.addEventListener('DOMContentLoaded', main);

})(undefined);
