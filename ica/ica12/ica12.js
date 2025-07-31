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



