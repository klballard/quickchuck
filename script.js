const baseURL = 'api.icndb.com/jokes/random';

const chuckBtn = document.querySelector('#chuckButton');

chuckBtn.addEventListener('click', findJoke);

async function findJoke() {

    try{

    let response = await fetch(baseURL);
    let jokeRandom = await response.json();
    let chosenJoke = jokeRandom.value.joke;

    let jokeResult = document.getElementById('jokeResult');
    let jokeDisplay = document.createTextNode(`${chosenJoke}`);
    jokeResult.appendChild(jokeDisplay);
    
    }
    catch (error) {
        console.log(error)
    }
}