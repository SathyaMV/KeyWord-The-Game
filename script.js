const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");

// List of words

const words = [
  "hello",
  "where",
  "juice",
  "airplane",
  "ball",
  "bat",
  "war",
  "dog",
  "fishes",
  "swim",
  "bad",
  "good",
  "dependent",
  "drag",
  "drop",
  "world",
  "country",
  "panda",
  "ice",
  "cool",
  "chocolate",
  "freeze",
  "soft",
  "heart",
];

// Initialize Word
let randomWord;

// Initialize Score
let score = 0;

// Initialize Time
let time = 10;

// Focus On Text On Start
text.focus();

// Start Counting Down
const timeInterval = setInterval(updateTime, 1000);

// Generate Random Word From The Array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add Word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

// Update Score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update Time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "s";
  // Prevent From Negative Time
  if (time === 0) {
    clearInterval(timeInterval);
    // End Game
    gameOver();
  }
}

// Game Over or End Game
function gameOver() {
  endgameEl.innerHTML = ` <h1>Time ran out !!!</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button> `;
  endgameEl.style.display = "flex";
}

addWordToDOM();

// Adding Event Listener To The Input
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();
    // Clear The Input Field After Typing Each Word
    e.target.value = "";

    time += 5;
    updateTime();
  }
});
