
function playStation(){
    mySound = new sound("ded.mp3");
    mySound.play();
}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}


function startCount(){
                playStation();
                document.getElementById("counter1").id = "counter2";
                let currTime = 50;
                for(i = 0; i <=10; i++){
                setTimeout(function countDown(){
                
                                if(currTime == 0){
                                        alert("Blastoff");
                                        document.getElementById("counter2").innerHTML = ("Countdown: "+ currTime);
                                        document.getElementById("counter2").innerHTML = ("Gone to space, will be back soon!");
                                } 
                                else if(currTime <= 25){
                                        document.getElementById("counter2").innerHTML = ("Warning Less than ½ way to launch, time left: " + currTime);
                                }
                                else{
                                        document.getElementById("counter2").innerHTML = ("Countdown: "+ currTime);
                                }
                                currTime -= 5;    
                
                },i * 5000);
        }
        
}


function changeColor(newColor){
        let elem = document.getElementById("counter2");
        elem.style.color = newColor;
}