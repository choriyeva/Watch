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






document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
};


