window.addEventListener('load',init);

// available levels
const levels={
    easy:5,
    medium:3,
    hard:2
}

// Globals
// To change level
const currentLevel=levels.medium;

let time=currentLevel;
let score=0;
let isPlaying;

// DOM elements
const wordInput=document.querySelector('#word-input');
const currentWord=document.querySelector('#current-word');
const scoreDisplay=document.querySelector('#score');
const timeDisplay=document.querySelector('#time');
const message=document.querySelector('#message');
const seconds=document.querySelector('#seconds');

const words =[
    'display',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

// Initialize Game

function init() {
    // show number of seconds left depending on level
    seconds.innerHTML=currentLevel;
    // load word from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input',startMatch);
    // console.log("init")
    // call countdown every second
    setInterval(countdown,1000);
    // check game status
    setInterval(checkStatus,50);
}

// // Start Match
function startMatch() {
    if(matchWords()){
       isPlaying = true;
       time = currentLevel+1;
       showWord(words);
       wordInput.value='';
       score++;
}
// if score is -1 display 0
if (score===-1) {
 scoreDisplay.innerHTML=0;
}else{
    scoreDisplay.innerHTML=score;

}
}



// match currentWord to wordInput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
      message.innerHTML = 'Correct!!!';
      return true;
    } else {
      message.innerHTML = '';
      return false;
    }
  }

// pick and show random word
function showWord(words) {
    // generates random array index
    const randIndex =Math.floor(Math.random() * words.length);
    //output random word from currentWord ID
    currentWord.innerHTML=words[randIndex];
}

//countDown timer
function countdown(){
    // make sure time is not run out
    if(time>0) {
//   decrement
    time--;
    }else if(time ===0){
        // game is over
        isPlaying = false;
    }
    // show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
      message.innerHTML = 'Game Over!!!';
     //game reset to 0
      score = -1;
    }
  }