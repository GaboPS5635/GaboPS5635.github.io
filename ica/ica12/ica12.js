//Select the new quote button using a querySelector. Assign it to a new variable.
//Write an event listener to check if the button is clicked. When the button is clicked, run a function called "getQuote".
//Write the function declaration, and check the button click works by returning a message in the console everytime the button is clicked.
//Add a new variable that holds the API endpoint: 
//https://trivia.cyberwisp.com/getrandomchristmasquestion
//Change the getQuote function to use the fetch method to get a random quote from that endpoint.//
//If successful, output the quote to the console
//If it fails, output an error message to the console AND via alert
//Write a second function called "displayQuote" that will display the text of a fetched quote in the HTML element with an id of js-quote-text.
//Adjust getQuote to run displayQuote at the proper place in the code.
//Notice when you refresh that a quote isn't displayed. Fix that.


const newQuote = document.querySelector("#js-new-quote");
const answerBtn = document.querySelector('#js-tweet');
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";


let json = "";

newQuote .addEventListener('click', getQuote);
answerBtn .addEventListener('click', displayAnswer);




async function getQuote(){
    const answerArea = document.querySelector("#js-answer-text");
    answerArea.textContent = '';

    //console.log("testing getQuote");
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }

        json = await response.json();
        displayQuote(json.question);
        //console.log(json.question);
        //console.log(json.answer);

    

    } catch (err) {
        console.log(err);
        alert('Failed ot fetch a new trivia');

    }
    

   
}

function displayQuote(quote){
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;

}

function displayAnswer() {
    const answerArea = document.querySelector('#js-answer-text');
    answerArea.textContent = json.answer;
}

getQuote();



