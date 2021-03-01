

setInterval(() => {
var date = new Date();
dt = date.getDate();
hours = date.getHours();
minutes = date.getMinutes();
seconds = date.getSeconds();

month = date.toLocaleString('default', { month: 'short' });

document.getElementById('currentMonth').innerHTML = month +" " +dt;

hHandRotation = 30 * hours + minutes/2; //in 60 min 30 deg rotation + (60 min = 30deg so 1 min = 60/30 .i.e. 1/2)
mHandRotation = 6 * minutes; //in 60 min 360 deg rotation so in 1 min 6 deg (360/60)
sHandRotation = 6 * seconds; //in 60 sec 360 deg rotation so in 1 sec 6 deg (360/60)

hour.style.transform =`rotate(${hHandRotation}deg)`
minute.style.transform =`rotate(${mHandRotation}deg)`
second.style.transform =`rotate(${sHandRotation}deg)`

}, 1000);