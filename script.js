'use strict';
const randNum  = ()=>{
    return (Math.trunc(Math.random()*20)+1)
}
let secretNum = randNum();
let score = 20;
//console.log(secretNum)
document.querySelector('.check').addEventListener('click' , function() {
    const guessNum = Number(document.querySelector('.input').value)
    if(guessNum){   // If input is entered
        if(guessNum === secretNum){ // If guess is correct
            document.querySelector('.txt-msg').textContent = 'You guessed it! 🎉🎉'
            document.querySelector('.screen-txt').textContent = secretNum
            let hScore = Number(document.querySelector('.h-score').textContent)
            if(score >= hScore){
                hScore = score
            }
            document.querySelector('.h-score').textContent = hScore
        }
        else{   // If guess is wrong
            if(guessNum > secretNum){   // guess is too high
                document.querySelector('.txt-msg').textContent = 'Too high!'
            }
            else{   //guess is too low
                document.querySelector('.txt-msg').textContent = 'Too low!'
            }
            score--;
            document.querySelector('.y-score').textContent = score
        }
    }else{
        document.querySelector('.txt-msg').textContent = 'Enter a value first...'
    }  
})

// Button Again! event

document.querySelector('.again').addEventListener('click',()=>{
    document.querySelector('.y-score').textContent = 20;
    score = 20;
    document.querySelector('.txt-msg').textContent = 'Start Guessing ...'
    document.querySelector('.screen-txt').textContent = '?'
    secretNum = randNum();
    //console.log(secretNum)
})

// Press enter event

document.querySelector('.input').addEventListener('keyup',(event)=>{
    if(event.keyCode === 13){
        event.preventDefault();
        document.querySelector('.check').click()
    }
})