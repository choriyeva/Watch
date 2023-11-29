let  hour=document.getElementById("hour")
let  minut=document.getElementById("minut")
let  second=document.getElementById("second")



function displayTime(){
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let hrotation=30*hh+mm/2+ss/120;
    let mrotation=6*mm+ss/10;
    let srotation=6*ss;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minut.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;

}



setInterval(displayTime,1000);




