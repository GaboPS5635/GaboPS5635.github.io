//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS

const insertX = ['Carti the Rager', 'Sir Slattalot', 'Lil Vampire'];

const insertY = ['the waifu café', 'Rage Arena 3000', 'NPC Love Island'];

const insertZ = ['yeeted his gaming chair out the window', 'bit his controller in half', 'activated Ultra Instinct and started levitating'];

const storyText = "It was 94 fahrenheit outside, so :insertx: logged into the Playboi Carti Dating Sim VR. When they got to :inserty:, Carti screamed 'WHOLE LOTTA RED!' and :insertz:. Bob witnessed the carnage while sipping a Sprite Cranberry — :insertx: was wearing vampire fangs and had just rage-quit because the anime waifu didn’t pick him.";

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);


  if(customName.value !== '') {
    newStory = newStory.replace ('Bob', customName.value);
        
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286)+ 'stone';
    const temperature =  Math.round((94 - 32) * 5 / 9);
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}