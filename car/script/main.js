$(document).ready(function(){
  

  if(document.documentElement.clientWidth<1250){
    $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2600,
    //   infinite: true,
    speed: 800,
    centerMode: true,
    slidesToShow: 1,
    variableWidth: true
    });
  }
  else{
    $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2600,
    //   infinite: true,
    speed: 800,
    // centerMode: true,
    slidesToShow: 1,
    variableWidth: true
    });
  }

  let body = document.body,
       overlay = document.querySelector('.overlay'),
      overlayBtts = document.querySelectorAll('button[class$="overlay"]');
      $('.overlay-btns').on('click touch',function(e){
        if(this!=e.target) return;
        e.preventDefault();
        overlay.classList.toggle('display');
        body.classList.toggle('noscroll');
        document.querySelector('html').classList.toggle('noscroll');
        document.querySelector('.message').classList.toggle('message-anime');
      });
  });