// Dmitrii Orlov
function kplay() {
    var die1 =Math.ceil(Math.random()*6);//First die, calling random number between 1-6.
    var die2 =Math.ceil(Math.random()*6);//Second die, calling random number between 1-6.
    
    var sum = die1+die2//Sum of both dice.

    document.getElementById("die1").innerHTML=("Die 1 = " + die1)//Writes the value of the first die.

    document.getElementById("die2").innerHTML=("Die 2 = " + die2)//Writes the value of the second die.

    document.getElementById("sum").innerHTML=("Sum = " + sum)//Writes the sum of both dice.

    if (sum == 7 || sum == 11){ //1st condition. if sum equals 7 or 11 you lose.
        document.getElementById("result").innerHTML=("CRAPS - you lose.")
    }
    else if ((die1 == die2) && (die1%die2 == 0)){//2nd condition. if dice are equal, or if die1/die2 and there will no leftover you win.
        document.getElementById("result").innerHTML=("DOUBLES - you win.")
    }
    else{
        document.getElementById("result").innerHTML=("DRAW - well, nothing.")
    }
    
}