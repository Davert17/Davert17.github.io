window.onload=function(){
 var cinema2d=document.getElementById("d2");
 cinema2d.onchange=chengedSumFunck;   
 var cinema3d=document.getElementById("d3");
 cinema3d.onchange=chengedSumFunck; 
 var popcorn =document.getElementById('popcorn');
popcorn.onchange=chengedSumFunck;
chengedSumFunck();
document.getElementById('spoilerbut').onclick=ajaxGetSpoiler1;
document.getElementById('tablebut').onclick=Ajaxlsontable;
}

function ajaxGetSpoiler1(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
    if (xhttp.readyState==4 && xhttp.status==200)
      document.getElementById("getspoiler1").innerHTML=xhttp.responseText;
      
    }
    xhttp.open("POST","/spoiler1.txt",true);
    xhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhttp.send();
}

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



var MOVIE2D=70;
var MOVIE3D=100;
var POP_CORN=60;
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