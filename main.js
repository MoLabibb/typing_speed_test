wordsList = [
    'python', 
    'angular', 
    'java', 
    'PHP', 
    'Django', 
    'React', 
    'html', 
    'CSS', 
    'sql', 
    'git', 
]
let fullscore = wordsList.length ; 
let playerInfo     = document.querySelector('.player-info');
let thname         = document.querySelector('.player-info .name-input');
let playerName     = document.querySelector('.player-name strong');
let levelSelect    = document.querySelector('select');
let startBtn       = document.querySelector('.submit');
let level          = document.querySelector('.info .level strong ');
let time           = document.querySelector('.time strong');
let word           = document.querySelector('.randomWord');
let input          = document.querySelector('.input');
let words          = document.querySelector('.words');
let result         = document.querySelector('.result');
let scoreSpan      = document.querySelector('.score');       
let AnotherRound   = document.querySelector('.restart'); 

const levels = {
    "easy"   : 5,
    "normal" : 3, 
    "hard"   : 2,
}
let score  = 0 ; 


startBtn.onclick = start;
function start(){
    playerName.innerHTML     = `${thname.value}`;
    playerInfo.style.display = 'none'; 
    level.innerHTML          = ` ${levelSelect.value}` ; 
    scoreSpan.innerHTML      = score;  
    time.textContent         = parseInt(levels[levelSelect.value]);
    input.focus(); 
    addData(); 
}



function addData(){
    randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    wordsList.splice( wordsList.indexOf(randomWord),1);
    word.innerHTML = randomWord; 
    words.innerHTML  = '';
    for(let i  = 0; i < wordsList.length; i++){
        let span  = document.createElement('span');
        span.appendChild(document.createTextNode(wordsList[i]));
        words.appendChild(span);
    }
    play();
}
function play(){
    time.textContent = parseInt(levels[levelSelect.value]);
    let startPlay = setInterval(() => {
        time.innerHTML--; 
        if(time.innerHTML == 0 ){
            clearInterval(startPlay);
         if(input.value.toLowerCase() == randomWord.toLowerCase()){
                input.value = '';
                scoreSpan.innerHTML++; 
            if(wordsList.length > 0 ){
                addData();
            }else{
                let h1 = document.createElement('h1');
                h1.appendChild(document.createTextNode(`Congrats You Got Full Score [ ${fullscore} ] from  [ ${fullscore} ]`));
                result.appendChild(h1);
                result.style.display = 'flex';
                AnotherRound.style.display = 'block';
            }
    }else{
        let message = document.createElement('p');
        message.appendChild(document.createTextNode(`You Got [ ${scoreSpan.innerHTML} ] from [${fullscore}] `));
        result.appendChild(message);
        result.style.display = 'flex'; 
        AnotherRound.style.display = 'block';
    }
        }
    }, 1000);
}
AnotherRound.onclick = ()=>{

    location.reload();

};


