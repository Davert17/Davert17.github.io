"use strict"

$(document).ready(function(){
    (function(e){
       
          e.closest = e.closest || function(css){
       
            var node = this;
  
            while (node) {
     
              if (node.matches(css)) return node;
     
              else node = node.parentElement;
        
            }
  
            return null;
  
          }
        
        })(Element.prototype);
        
        if (!Element.prototype.matches) {
            
              Element.prototype.matches =
            
                Element.prototype.matchesSelector ||
            
                Element.prototype.mozMatchesSelector ||
            
                Element.prototype.msMatchesSelector ||
            
                Element.prototype.oMatchesSelector ||
            
                Element.prototype.webkitMatchesSelector ||
            
                function(s) {
            
                  var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            
                    i = matches.length;
            
                  while (--i >= 0 && matches.item(i) !== this) {}
            
                  return i > -1;
            
                };
            
            }
            
            if (/Edge/.test(navigator.userAgent)) {
                
                $('header').addClass('edgeOnly');
                $('footer').addClass('edgeOnly');
                $('section.third-section').addClass('edgeOnly');
                $('section.four-section').addClass('edgeOnly');

            }
            if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
            {
              
              $('header').addClass('safaryOnly');
              $('section.four-section').addClass('safaryOnly');
              $('footer').addClass('safaryOnly');
            }



    $('.slick-team-slider').slick({
        centerMode: true,
        // centerPadding: '60px',
        infinite:false,
        swipeToSlide:true,
        initialSlide:1,
        slidesToShow: 3,
        focusOnSelect: true,
        variableWidth: true
    });


    {
        let prevElement =$('section.sixth-section div.slick-coment-item.active');
        $('section.sixth-section .slick-nav-slider').on('click touch',function(e){
            
            let thumbnail = e.target.closest('div.rhombus[data-traget]');
            
            if(!thumbnail)return;
            $(prevElement).removeClass('active');
            let elements= $('section.sixth-section div.slick-coment-item');
            
            // for(let elem of elements)
            // {    
            //    let atr= elem.dataset.item;
            //    if(atr==thumbnail.dataset.traget){
            //     $(elem).addClass('active');
            //     prevElement=elem;
            //     return;
            //    }
               
            // }

            for(let i=0;i< elements.length;i++)
            {    
               let atr= elements[i].dataset.item;
               if(atr==thumbnail.dataset.traget){
                $(elements[i]).addClass('active');
                prevElement=elements[i];
                return;
               }
               
            }
        });
    }
    $('.modal-open-close-btn').on('click touch',function (e) {
      $('body').toggleClass('modal-body-html');
      $('html').toggleClass('modal-body-html');
      $('.modal-popup-nav').toggleClass('show-maodal');
    })
    


   



    $('#head-id').on('mousemove touchmove',function (e) {
      // console.log('good');
      let posX,posY;
      if ((e.clientX)&&(e.clientY)) {
         posX = e.clientX;
        posY = e.clientY;
        } else if (e.targetTouches) {
        posX = e.targetTouches[0].clientX;
        posY = e.targetTouches[0].clientY;
        
        }



      let sckater= document.querySelector('#skateboareder');
      let h1=document.querySelector('h1');
      sckater.style.transform=' translate(-'+posX/40+'px,-'+posY/30+'px)';

    });
    $('#about-id').on('mousemove touchmove',function (e) {
      // console.log('good');
      let posX,posY;
      if ((e.clientX)&&(e.clientY)) {
         posX = e.clientX;
        posY = e.clientY;
        } else if (e.targetTouches) {
        posX = e.targetTouches[0].clientX;
        posY = e.targetTouches[0].clientY;
        
        }



      let sckater= document.querySelector('#macbook');
      
      sckater.style.transform=' translate(-'+posX/40+'px,-'+posY/30+'px)';

    });
    // setTimeout(()=>{},2000);



    let aboutOffset= $('#about-id').offset().top,
    workOffset= $('#work-id').offset().top,
    processOffset= $('#process-id').offset().top,
    teamOffset= $('#team-id').offset().top,
    clientsOffset= $('#clients-id').offset().top;


    let scrollHeight=$(document).scrollTop()+$( window ).height();
    if((scrollHeight+30)>aboutOffset){
      $('#about-id .container').removeClass('not-in-view');
      
    }
     if((scrollHeight+30)>workOffset){
      $('#work-id .container').removeClass('not-in-view');
    }
     if((scrollHeight+30)>processOffset){
      $('#process-id .animate-hidden').removeClass('not-in-view');
    }
     if((scrollHeight+30)>teamOffset){
      $('#team-id .container').removeClass('not-in-view');
    }
    if((scrollHeight+30)>clientsOffset){
      $('#clients-id .animate-hidden').removeClass('not-in-view');
    }

    $(document).on('scroll',function (e) {
       scrollHeight=$(document).scrollTop()+$( window ).height();


      if((scrollHeight+30)>aboutOffset){
        $('#about-id .container').removeClass('not-in-view');
        
      }
       if((scrollHeight+30)>workOffset){
        $('#work-id .container').removeClass('not-in-view');
      }
       if((scrollHeight+30)>processOffset){
        $('#process-id .animate-hidden').removeClass('not-in-view');
      }
       if((scrollHeight+30)>teamOffset){
        $('#team-id .container').removeClass('not-in-view');
      }
      if((scrollHeight+30)>clientsOffset){
        $('#clients-id .animate-hidden').removeClass('not-in-view');
      }




    })
  });