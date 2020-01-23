"use strict"

window.addEventListener('load',function(e) {
    
    document.querySelectorAll('.img-slide-container').forEach(function(e) {
        e.classList.toggle('change-anime1');
    });


    document.querySelector('header').addEventListener('mousemove', function(e){
        let posX,posY;
        if ((e.clientX)&&(e.clientY)) {
           posX = e.clientX;
          posY = e.clientY;
          } 

  
  
          
        let slide1= document.querySelector('.img-slide1');

        slide1.style.transform=' translate('+posX/30+'px,'+posY/20+'px) rotate(1.1deg) ';
        let slide2= document.querySelector('.img-slide2');
        slide2.style.transform=' translate(-'+posX/20+'px,-'+posY/15+'px) rotate(1.1deg) ';
        let slide3= document.querySelector('.img-slide3');
        slide3.style.transform=' translate('+posX/40+'px,'+posY/30+'px) rotate(1.1deg) ';
    });
    


    let sliderh1=  new Swiper('.swiper-slider-h1', {
        slidesPerView: 'auto',
        centeredSlides: true,
        initialSlide:1
      });


      let prevLast=2;
      
      sliderh1.on('slideChange',function()
      {
           prevLast=document.querySelector('.swiper-slide-active').dataset.swiperSlide;

        });


      sliderh1.on('slideChangeTransitionEnd',async function(){
        let prev=prevLast;
        let targetnumber=document.querySelector('.swiper-slide-active').dataset.swiperSlide;


        let prevImg=document.querySelector('.img-slide'+prev+' img').getAttribute('src');
        let targetImg=document.querySelector('.img-slide'+targetnumber+' img').getAttribute('src');


        
         document.querySelectorAll('.img-slide-container').forEach(e=> {
             e.classList.toggle('change-anime');
         });




      await setTimeout(()=>{         
          document.querySelector('.img-slide'+prev+' img').setAttribute('src',targetImg);
          document.querySelector('.img-slide'+targetnumber+' img').setAttribute('src',prevImg);
          document.querySelectorAll('.img-slide-container').forEach((e)=> {
        e.classList.toggle('change-anime');
    });},350)
      });
    




      let tooltipH1=document.querySelector('.tooltip-h1'),
      sliderTooltip=document.querySelector('.swiper-slider-h1');
      sliderTooltip.classList.remove('change-anime1');
      function moveto(e) {
        tooltipH1.style.left = e.clientX+15+"px";
        tooltipH1.style.top = (e.clientY-12)+"px";
      }

      sliderTooltip.addEventListener('mouseenter',function(e){
        tooltipH1.classList.toggle('visivle');
        moveto(e);

      });

      sliderTooltip.addEventListener('mouseleave',function(e){
        tooltipH1.classList.toggle('visivle');
        moveto(e);

      });

      sliderTooltip.addEventListener('mousemove',moveto);

      document.querySelectorAll('.trigger').forEach((e)=>{
        
        e.addEventListener('click', function(){
            console.log('1');
            document.querySelector('.modal-popup-nav').classList.toggle('modal-show');
        });
        e.addEventListener('touch', function(){
            console.log('1');
             document.querySelector('.modal-popup-nav').classList.toggle('modal-show');
        });
      });
})