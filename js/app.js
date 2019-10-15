var mystart=document.getElementById('start-button');
mystart.onclick=function () {
    var hourObj=document.getElementById('hours');
    var minuteObj=document.getElementById('minutes');
    var secondObj=document.getElementById('seconds');



    var hourCounter=0;
    var minuteCounter=0;
    var secondCounter=0;

var status=1;

    setInterval(function () {
        if(status) {

            secondCounter++;
            if (secondCounter > 59) {
                secondCounter = 0;
                minuteCounter++;
            }


            if (minuteCounter > 59) {
                minuteCounter = 0;
                hourCounter++;


            }

            hourObj.innerText = hourCounter;
            minuteObj.innerText = minuteCounter;
            secondObj.innerText = secondCounter;


        }



    },1000)

    mystart.innerText="STOP";
    mystart.style.borderColor="blue";
mystart.onclick=function () {
    status=0;
}



};