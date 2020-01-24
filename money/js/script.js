window.addEventListener('load',function(){

    function animate(_ref) {
        let timing = _ref.timing,
      draw = _ref.draw,
      duration = _ref.duration;
        let start = performance.now();
      
        requestAnimationFrame(function animate(time) {
       
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;
      
       
          let progress = timing(timeFraction);
      
          draw(progress);
      
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }
      
        });
      }


      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function animateText(text,elem) {
            
            let to = text.length,
              from = 0;
      
            animate({
              duration: 1000,
              timing: linear,
              draw: function(progress) {
                let result = (to - from) * progress + from;
                elem.textContent= text.substr(0, Math.ceil(result))
              }
            });
          }
      
      
    function linear(timeFraction) {
        return timeFraction;
      }

    function bidAskGenerator(){
        let bid=getRandomArbitrary(1500.00,3499.99).toFixed(2);
        let ask=2.0 + +bid;
        
        animateText(" €"+bid+" ",document.querySelector('.bid'));
        animateText(" €"+ask+" ",document.querySelector('.ask'));
    }

    // Обновление  Bid Ask
    bidAskGenerator();
    let bidAskInterval=setInterval(bidAskGenerator, 15000);


    // Отправка формы

    document.addEventListener('submit',function(e){
        
        e.preventDefault();
        
        // console.log(e.target.action);
        let form=e.target;
        // console.log(form);
        

        let url =new URL('http://somesite.com');
        url.searchParams.set('first_name',form.elements.first_name);
        url.searchParams.set('last_name',form.elements.last_name);
        url.searchParams.set('first_name',form.elements.email);
        let response =  fetch(url, {
            method: 'GET'
          }).then(function(response) {console.log(response.message)}).catch(function(onRejected){console.log(onRejected)});
        
          if(form.classList.contains('form-animation')){
            togglePopUp();
          }
    });

    function togglePopUp() {
        document.querySelector('html').classList.toggle('screen-popup');
        document.querySelector('body').classList.toggle('screen-popup');
        document.querySelector('.overlay').classList.toggle('visidle');
        document.querySelector('.form-target-animation').classList.toggle('form-animation');
    }

let list= document.querySelectorAll('.showpopup');
for(let i=0;i<list.length;i++){
    list[i].onclick=function (e) {
        togglePopUp();
    }
}

    // суммы по годам
    // alert(document.querySelectorAll('.amount'));
    Array.from(document.querySelectorAll('.amount')).reduce(function(prevValue,item,index){
        if(index)        
            prevValue = getRandomArbitrary(prevValue,9000).toFixed(2);
        
        // prevValue= +prevValue;
        animateText(" $"+prevValue+" ",item);

        return +prevValue;
    },+getRandomArbitrary(2,100).toFixed(2));
});