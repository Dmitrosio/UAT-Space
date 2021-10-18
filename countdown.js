// Dmitrii Orlov
let currTime = 50;
for(i = 0; i <=10; i++){
        setTimeout(function(){
                
                        if(currTime == 0){
                                alert("Blastoff");
                                document.getElementById("counter").innerHTML = ("Countdown: "+ currTime);
                                document.getElementById("counter").innerHTML = ("Gone to space, will be back soon!");
                        } 
                        else if(currTime <= 25){
                                document.getElementById("counter").innerHTML = ("Warning Less than ½ way to launch, time left: " + currTime);
                        }
                        else{
                                document.getElementById("counter").innerHTML = ("Countdown: "+ currTime);
                        }
                        currTime -= 5;    
                
        },i * 5000);
}


function changeColor(newColor){
        let elem = document.getElementById("counter");
        elem.style.color = newColor;
}