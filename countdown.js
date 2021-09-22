// Dmitrii Orlov
let currTime = 50;
setTimeout(CountDown, 0000)
setTimeout(CountDown, 5000)
setTimeout(CountDown, 10000)
setTimeout(CountDown, 15000)
setTimeout(CountDown, 20000)
setTimeout(CountDown, 25000)
setTimeout(CountDown, 30000)
setTimeout(CountDown, 35000)
setTimeout(CountDown, 40000)
setTimeout(CountDown, 45000)
setTimeout(CountDown, 50000)

function CountDown(){
        if(currTime == 0){
                alert("Blastoff");
                document.getElementById("counter").innerHTML = ("Countdown: "+ currTime);
                document.getElementById("counter").innerHTML = ("Gone to space, will be back soon!");
        }
        else{
                document.getElementById("counter").innerHTML = ("Countdown: "+ currTime);
        }
        currTime -= 5;
        if(currTime <= 25){
                document.getElementById("counter").innerHTML = ("Warning Less than ½ way to launch, time left: " + currTime);
        }
}

function changeColor(newColor){
        let elem = document.getElementById("counter");
        elem.style.color = newColor;
}