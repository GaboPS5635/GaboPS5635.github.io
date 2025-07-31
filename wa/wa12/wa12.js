const newQuote = document.querySelector("#js-new-quote");
const endpointBase = "https://pokeapi.co/api/v2/";

newQuote.addEventListener("click", getPokemon);

async function getPokemon() {
    const answerArea = document.querySelector("#js-answer-text");
    answerArea.textContent = ""; 



    const id = Math.floor(Math.random() * 1025) + 1;

    try {

        const response = await fetch(endpointBase + "pokemon/" + id);
        const data = await response.json();

        const speciesRes = await fetch(endpointBase + "pokemon-species/" + id);
        const speciesData = await speciesRes.json();

        const name = data.name;
        const sprite = data.sprites.front_default;
        const type = data.types[0].type.namse; 
        let flavor = "";

        for (let entry of speciesData.flavor_text_entries) {
            if (entry.language.name === "en") {
                flavor = entry.flavor_text.replace(/\n|\f/g, " ");
                break;
            }
        }

        displayPokemon(name, sprite, type, flavor);

    } catch (err) {
        console.log(err);
        alert("Could not load Pokémon");
    }
}



function displayPokemon(name, sprite, type, flavor) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.innerHTML = `
        <img src="${sprite}" alt="${name}" width="120">
        <h2>${name.toUpperCase()}</h2>
        <p>Type: ${type}</p>
    `;

    const answerArea = document.querySelector("#js-answer-text");
    answerArea.textContent = flavor;
}

getPokemon();
