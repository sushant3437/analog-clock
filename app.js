setInterval(()=>{
    d=new Date();
    htime=d.getHours();  //to get current hour
    mtime=d.getMinutes();  //to get current minute
    stime=d.getSeconds();   //to get current seccond
   hrotation=30*htime+mtime/2;
   mrotation=6*mtime;
   Srotation=6*stime;
   hour.style.transform=`rotate(${hrotation}deg)`;
   minute.style.transform=`rotate(${mrotation}deg)`;
   second.style.transform=`rotate(${Srotation}deg)`;
},1000);






