alert("Welcome, Recruit. You are being onboarded into the Ultra Classified Blah Blah Blahhhhhh.");
alert("Please enter your secure contact number in the field ahead.");
alert("⚠ SYSTEM NOTICE: Due to critical maintenance, we have reverted to our ancient word-based phone entry system. Apologies for the inconvenience.");

document.getElementById("instructions").innerHTML = 
  "📜 Instructions: Type out the WORD of each digit in your phone number. " +
  "For example, instead of '5', type 'five'.<br>Note: Keys will rearrange after each press. Good luck, Agent.";

const digitWords = ["zero","one","two","three","four","five","six","seven","eight","nine"];

function createRandomMap() {
  let map = {};
  digitWords.forEach((word, i) => {
    let wrongIndex;
    do {
      wrongIndex = Math.floor(Math.random() * 10);
    } while (wrongIndex === i); // ensure it's wrong
    map[word] = digitWords[wrongIndex];
  });
  return map;
}

let autocorrectMap = createRandomMap();

let currentWord = "";
let phoneNumber = "";

// keyboard setup
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

  // if the current word matches a digit word
  if (digitWords.includes(currentWord)) {
    let wrongWord = autocorrectMap[currentWord];
    let wrongDigit = digitWords.indexOf(wrongWord).toString();
    phoneNumber += wrongDigit;
    currentWord = "";
    autocorrectMap = createRandomMap(); 
  } else {
    if (!digitWords.some(word => word.startsWith(currentWord))) {
      currentWord = "";
      alert("Invalid entry detected. Letter erased from secure logs.");
    }
  }
  updateOutput();
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
  if (phoneNumber.length === 0 && currentWord.length > 0) {
    currentWord = currentWord.slice(0, -1);
  } else if (phoneNumber.length > 0) {
    if (Math.random() < 0.5) { 
      let randomIndex = Math.floor(Math.random() * phoneNumber.length);
      phoneNumber = phoneNumber.slice(0, randomIndex) + phoneNumber.slice(randomIndex + 1);
      alert("Oops! Deleted a random digit instead of the last one 😈");
    } else {
      phoneNumber = phoneNumber.slice(0, -1);
    }
  }
  updateOutput();
}

shuffle(letters);
renderKeyboard();
updateOutput();
