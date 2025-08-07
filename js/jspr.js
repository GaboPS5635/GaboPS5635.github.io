const digitWords = ["zero","one","two","three","four","five","six","seven","eight","nine"];
const autocorrectMap = {
  "zero": "five",
  "one": "seven",
  "two": "eight",
  "three": "nine",
  "four": "zero",
  "five": "two",
  "six": "three",
  "seven": "one",
  "eight": "four",
  "nine": "six"
};

let currentWord = "";
let phoneNumber = "";

//create on-screen keyboard
let letters = Array.from("abcdefghijklmnopqrstuvwxyz");
const keyboard = document.getElementById("keyboard");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderKeyboard() {
  keyboard.innerHTML = "";
  letters.forEach(letter => {
    const btn = document.createElement("button");
    btn.textContent = letter;
    btn.onclick = () => typeLetter(letter);
    keyboard.appendChild(btn);
  });
}

function typeLetter(letter) {
  currentWord += letter;

  shuffle(letters);
  renderKeyboard();

  if (digitWords.includes(currentWord)) {
    let wrongWord = autocorrectMap[currentWord]; 
    let wrongDigit = digitWords.indexOf(wrongWord).toString();
    phoneNumber += wrongDigit; 
    currentWord = ""; 
    updateOutput();
  } else {
    updateOutput();
  }
}

function updateOutput() {
  if (currentWord.length > 0) {
    document.getElementById("output").textContent =
      "Current phone: " + phoneNumber + " (typing: " + currentWord + ")";
  } else {
    document.getElementById("output").textContent =
      "Current phone: " + phoneNumber;
  }
}

function deleteLast() {
  if (phoneNumber.length === 0) return;

  if (Math.random() < 0.5) { 
    //delete a random digit instead of last
    let randomIndex = Math.floor(Math.random() * phoneNumber.length);
    phoneNumber = phoneNumber.slice(0, randomIndex) + phoneNumber.slice(randomIndex + 1);
    alert("Oops! Deleted a random digit instead of the last one 😈");
  } else {
    
    phoneNumber = phoneNumber.slice(0, -1);
  }
  updateOutput();
}

shuffle(letters);
renderKeyboard();
updateOutput();