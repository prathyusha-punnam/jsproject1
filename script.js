function clock(){



    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var am=document.getElementById("am");
    
    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();

    

    hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
    

    if(a>12){
        let to_pm=a-12;
        if(to_pm<=9)hours.innerHTML="0"+to_pm;
      else hours.innerHTML=to_pm;
      am.innerHTML="pm";  
    }
    else if(a==12 && b>0){
        hours.innerHTML=a;
        am.innerHTML="pm"
    }
    else{
        if(a<=9)hours.innerHTML="0"+a;
        else hours.innerHTML=a;
        am.innerHTML="am"
    }

}
setInterval(clock,1000);

 function Makediv(){  
       var container=document.createElement('div');
       container.className="box";
        container.id="dynamic-block";

    document.getElementById('main').appendChild(container);
   
    var invalue=document.getElementById("wakeuptimeselector");
    var invalue1=document.getElementById("lunch");
     var invalue2=document.getElementById("nap");

     var value =invalue.options[invalue.selectedIndex].text;
     document.getElementById("dynamic-block").innerHTML="wake up time " + value +
     "<br/>lunch time " + invalue1.options[invalue1.selectedIndex].text +
     "<br/>nap time " + invalue2.options[invalue2.selectedIndex].text;
    
 }
 function settime(){

  

     var i=document.getElementById('wakeuptimeselector').value;
     var j=document.getElementById('lunch').value;
     var k=document.getElementById('nap').value;
     var hourr=new Date().getHours();

    if(i==hourr){

         document.getElementById('picture').style.backgroundImage="url(./bf.png)";
         document.getElementById('text').innerHTML="Lets Have Some breakfast";
     }
     else if(j==hourr){
        document.getElementById('picture').style.backgroundImage="url(./imgone.png)";
        document.getElementById('text').innerHTML="Lets Have Some lunch";

     }
     else if(k==hourr){
     document.getElementById('picture').style.backgroundImage="url(./bed.png)";
     document.getElementById('text').innerHTML="its sleeping time";
     }
     Makediv();
 }
