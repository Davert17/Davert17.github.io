window.onload=function(){
    checkIE();
    var cinema2d=document.getElementById("d2");
    cinema2d.onchange=chengedSumFunck;   
    var cinema3d=document.getElementById("d3");
    cinema3d.onchange=chengedSumFunck; 
    var popcorn =document.getElementById('popcorn');
    popcorn.onchange=chengedSumFunck;
    chengedSumFunck();
    document.getElementById('spoilerbut').onclick=ajaxGetSpoiler1;
    document.getElementById('tablebut').onclick=Ajaxlsontable;
    document.getElementById('xmlajax').onclick=XMLajaxcontent;

    document.getElementById('animationSpeed1x').onclick=setAnimSpeed1x;
    document.getElementById('animationSpeed2x').onclick=setAnimSpeed2x;
    drowLogo();
    canvasAnimaton();
    canvasDrow()
    document.getElementById('clearercanv').onclick= clearCanvas;


    document.getElementById('dropwindow').ondrop=function(ev){
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    };
    document.getElementById('dropwindow').ondragover=function(e){
        e.preventDefault();
    };
    document.getElementById('dargzon').ondrop=function(ev){
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    };
    document.getElementById('dargzon').ondragover=function(e){
        e.preventDefault();
    };
    document.getElementById('tandrag').draggable=true;
    document.getElementById('tandrag').ondragstart=function(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    };
    document.getElementById('avedrag').draggable=true;
    document.getElementById('avedrag').ondragstart=function(ev){
        ev.dataTransfer.setData("text", ev.target.id);
    };

    tumbmail();

    document.getElementById("audioInput").addEventListener("change", checkerAudio, false);

    
}
//відображенян тексту 
function ajaxGetSpoiler1(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
    if (xhttp.readyState==4 && xhttp.status==200)
      document.getElementById("getspoiler1").innerHTML="<p>" + this.responseText.replace(/\n/g,"<br />") + "</p>";
    }
    xhttp.open("GET","spoiler1.txt",true);
    //xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhttp.send();
}

//відображення json
var tableExist=false;
function Ajaxlsontable(){
    if(!tableExist)
    {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET","cinemas.json",true);
        xhttp.send();
        xhttp.onreadystatechange=function()
        {
            if(xhttp.readyState==4)
            {
                var json =JSON.parse(xhttp.responseText)
                for(var i=0;i<json['cinemas'].length;i++)
                {
                    var trow= document.createElement('tr');
                    var tdata1= document.createElement('td');
                    var tdata2= document.createElement('td');
                    tdata1.innerText=json['cinemas'][i].name;
                    tdata2.innerText=json['cinemas'][i].year;
                    trow.appendChild(tdata1);
                    trow.appendChild(tdata2);
                    document.getElementById("movietable").appendChild(trow);
                }
                tableExist=true;
            }
        }        
    }

}
//відображення xml 
var xmlDOMExist=false;
function XMLajaxcontent(){
    if(!xmlDOMExist)
    {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET","xmldom.xml",true);
        xhttp.send();
        xhttp.onreadystatechange=function(){
            if(xhttp.readyState==4)
            {
                var xmlreq=xhttp.response;
                var parser = new DOMParser();
                var xmlDOC = parser.parseFromString(xmlreq, "text/xml");
                var xmlText = new XMLSerializer().serializeToString(xmlDOC);
                document.getElementById('ajaxdivinner').innerHTML+=xmlText;
                xmlDOMExist=true;
            }        
        }        
    }
}

var MOVIE2D=70;
var MOVIE3D=100;
var POP_CORN=60;
//відображаємо очікувану вартість
function chengedSumFunck(){
    var ticketsum=0;
    var popcornsum=0;
   if(document.getElementById("d2").value==2 && document.getElementById("d2").checked){
    ticketsum=MOVIE2D;
   }
   if(document.getElementById("d3").value==3 && document.getElementById("d3").checked){
    ticketsum=MOVIE3D;
   }

   if( document.getElementById('popcorn').checked){
       popcornsum=POP_CORN;
   }
   ticketsum+=popcornsum;
          document.getElementById('sum').innerText=ticketsum;
}

//малюємо лого
function drowLogo(){
    document.getElementById("logodrawing").width = 300;
    document.getElementById("logodrawing").height = 300;
    var drowAv=document.getElementById('logodrawing');
    var context=drowAv.getContext("2d");
    context.strokeStyle = "red";
    context.beginPath();
    context.lineWidth=12;
    context.arc(150, 150, 60, 0, Math.PI*2, false);
    context.moveTo(160,70);
    context.lineTo(170,190);
    context.moveTo(160,70);
    context.lineTo(100,220)
    context.moveTo(130,150);
    context.lineTo(160,150);

    context.closePath();
    context.stroke(); 

    context.beginPath(); 
    context.lineWidth=7;
    context.strokeStyle = "#fff";
    context.moveTo(130,170);
    context.lineTo(106,230);
    context.moveTo(109,170);
    context.lineTo(86,230);
    context.closePath();
    context.stroke(); 
}


function canvasAnimaton(){
    (function() {
        //Поліфіл для підтримки всіча браузерами

        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                    || window[vendors[x]+'CancelRequestAnimationFrame'];
        }
    
        if (!window.requestAnimationFrame)
            window.requestAnimationFrame = function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
                timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
    
        if (!window.cancelAnimationFrame)
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
    }());

    (function () {
                
        var girl,
            girlImage,
            canvas;					

        function gameLoop () {
        
        window.requestAnimationFrame(gameLoop);

        girl.update();
        girl.render();
        }
        
        function sprite (options) {
        
            var that = {},
                frameIndex = 0,
                tickCount = 0,
                ticksPerFrame = options.ticksPerFrame || 0,
                numberOfFrames = options.numberOfFrames || 1;
            
            that.context = options.context;
            that.width = options.width;
            that.height = options.height;
            that.image = options.image;
            
            that.update = function () {

                tickCount += 1;

                if (tickCount > returnSpeed()) {

                    tickCount = 0;
                    
                    // регулювання швидкості
                    if (frameIndex < numberOfFrames - 1) {	
                        
                        frameIndex += 1;
                    } else {
                        frameIndex = 0;
                    }
                }
            };
            
            that.render = function () {
            
            // очищуємо минулий кадр canvas
            that.context.clearRect(0, 0, that.width, that.height);
            
            // малюэмо анымацію
            that.context.drawImage(
                that.image,
                frameIndex * that.width / numberOfFrames,
                0,
                that.width / numberOfFrames,
                that.height,
                0,
                0,
                that.width / numberOfFrames,
                that.height);
            };
            
            return that;
        }
        
        // параметри canvas
        canvas = document.getElementById("coinAnimation");
        canvas.width = 300;
        canvas.height = 300;
        
        
        girlImage = new Image();	
        
        // cстворити sprite
        girl = sprite({
            context: canvas.getContext("2d"),
            width: 1536,
            height: 256,
            image: girlImage,
            numberOfFrames: 6,
            ticksPerFrame: returnSpeed()
        });
        
        // завантажеємо спрайт зображення
        girlImage.addEventListener("load", gameLoop);
        girlImage.src = "images/girlrun.png";

    } ()); 
}
//функції регулювання швидкістю анімації
function returnSpeed(){
    return animationSpeed;
}

var animationSpeed=4;
function setAnimSpeed1x()
{
    animationSpeed=4;
}
function setAnimSpeed2x(){
    animationSpeed=2;
}
//малювалкаа
function canvasDrow(){
    var canvas = document.getElementById("canvasdrover"), 
                context = canvas.getContext("2d");
                canvas.width = 300;
                canvas.height = 300;  
            var mouse = { x:0, y:0};
            var draw = false;
             
            canvas.addEventListener("mousedown", function(e){
                 
                mouse.x = e.pageX - this.offsetLeft;
                mouse.y = e.pageY - this.offsetTop;
                draw = true;
                context.beginPath();
                context.moveTo(mouse.x, mouse.y);
            });
            canvas.addEventListener("mousemove", function(e){
                 
                if(draw==true){
                 
                    mouse.x = e.pageX - this.offsetLeft;
                    mouse.y = e.pageY - this.offsetTop;
                    context.lineTo(mouse.x, mouse.y);
                    context.stroke();
                }
            });
            canvas.addEventListener("mouseup", function(e){
                 
                mouse.x = e.pageX - this.offsetLeft;
                mouse.y = e.pageY - this.offsetTop;
                context.lineTo(mouse.x, mouse.y);
                context.stroke();
                context.closePath();
                draw = false;
            });
}
//Очищення малювалки
function clearCanvas(){
    var canvas = document.getElementById("canvasdrover"), 
                context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height)
}


function tumbmail(){
    //Подія на зміну файла і виклик відображення
    var uploadedImageF=document.getElementById('imageuploader');
    uploadedImageF.addEventListener('change', function () {
        var file = this.files;
        
        previewImage(this.files[0]);

        
    }, false);

    // Відображення файлу
    function previewImage(file) {
        
        var tumbnail = document.getElementById('tumbnail');
        while (tumbnail.firstChild) {
            tumbnail.removeChild(tumbnail.firstChild);
        }
        var imageType = /image.*/;
        if (!file.type.match(imageType)) {
            throw "File Type must be an image";
        }
        
        var img = document.createElement("img");
        img.classList.add('thumbnail');
        img.file = file;
        tumbnail.appendChild(img);
        

        var reader = new FileReader();
        reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
        reader.readAsDataURL(file);
    }
}
//перевірка на аудіо
function checkerAudio(e) {
    
    var fileType = this.files[0].type;
    if (fileType.indexOf("audio") != -1) {
        loadFile(this.files[0], ifSound);
    } else {
        alert("Это не аудио файл!");
    }
}
function loadFile(file, loaded)//завантажуємо
{
    var reader = new FileReader();
    reader.onload = loaded;
    reader.readAsDataURL(file);
}

function ifSound(evt)
{
    document.getElementById("sound").src = evt.target.result;//виволимо
    document.getElementById("sound").play();//програємо аудіо
}


function checkIE(){
    if (document.all && document.querySelector && !document.addEventListener) {
        //alert('IE8');
        document.getElementById('maintitels').className="test";
        document.getElementById('decor_wight').className="smalie";
        var ele=  document.querySelectorAll('menu li');     
        document.querySelector('nav').className="baccolwidht";
  
        for(var i=0;i<ele.length;i++){
            ele[i].className="liinline";
        }
        document.querySelector('menu').className="liinline";
    }
    else if (document.all && !window.atob) {
        //alert('IE9');
        document.getElementById('maintitels').className="test";
        document.getElementById('decor_wight').className="smalie";
        document.querySelector('menu').className="liinline";
        document.querySelector('nav').className="baccolwidht";
        
      var ele=  document.querySelectorAll('menu li');       
        for(var i=0;i<ele.length;i++){
            ele[i].className="liinline";
        }

    }
}