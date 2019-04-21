function getDate(){
dobj=new Date();
hour=dobj.getHours();
if(hour<10){
    hour='0'+hour;
}

minute=dobj.getMinutes();
if(minute<10){
    minute='0'+minute;
}

second=dobj.getSeconds();
if(hour<10){
    secound='0'+second;
}

str=hour+':'+minute+':'+second;
sidobj=document.getElementById('sid');
sidobj.innerHTML=str;
}
getDate();
setInterval(function(){
    getDate();
},1000);
