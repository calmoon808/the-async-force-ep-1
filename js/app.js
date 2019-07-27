const darthVader = new XMLHttpRequest();
darthVader.open('GET', 'https://swapi.co/api/people/4/');
darthVader.send();
darthVader.addEventListener('load', function(){
    const jsonResponse = (JSON.parse(this.responseText));
    document.getElementById('person4Name').innerHTML = jsonResponse.name;

    const darthVaderHome = new XMLHttpRequest();
    darthVaderHome.open('GET', jsonResponse.homeworld);
    darthVaderHome.send();
    darthVaderHome.addEventListener('load', function(){
        const jsonResponse = JSON.parse(this.responseText);
        document.getElementById('person4HomeWorld').innerHTML = jsonResponse.name;
    })
})

const hanSolo = new XMLHttpRequest();
hanSolo.open('GET', 'https://swapi.co/api/people/14/');
hanSolo.send();
hanSolo.addEventListener('load', function(){
    const jsonResponse = (JSON.parse(this.responseText));
    document.getElementById('person14Name').innerHTML = jsonResponse.name;

    const hanSoloSpecies = new XMLHttpRequest();
    hanSoloSpecies.open('GET', jsonResponse.species);
    hanSoloSpecies.send();
    hanSoloSpecies.addEventListener('load', function(){
        const jsonResponse = JSON.parse(this.responseText);
        document.getElementById('person14Species').innerHTML = jsonResponse.name;
    })
})

const filmList = new XMLHttpRequest();
filmList.open('GET', 'https://swapi.co/api/films/');
filmList.send();
filmList.addEventListener('load', function(){
    const jsonResponse = (JSON.parse(this.responseText));
    for (let i = 0, n = jsonResponse.results.length; i < n; i++){
        let newLi = document.createElement('li');
        newLi.className = 'film';
        document.querySelector('#filmList').appendChild(newLi); 
        let newH2 = document.createElement('h2');
        newH2.classname = 'filmTitle';
        newH2.innerHTML = jsonResponse.results[i].title;
        document.querySelectorAll('.film')[i].appendChild(newH2);
        let newH3 = document.createElement('h3');
        newH3.innerHTML = 'Planets';
        document.querySelectorAll('.film')[i].appendChild(newH3);
        let newUl = document.createElement('ul');
        newUl.className = 'filmPlanets';
        document.querySelectorAll('.film')[i].appendChild(newUl);
        let planetsArray = jsonResponse.results[i].planets;
        for (let j in planetsArray){
            let getPlanet = new XMLHttpRequest();
            getPlanet.open('GET', planetsArray[j]); 
            getPlanet.send();
            getPlanet.addEventListener('load', function(){
                const jsonResponse = JSON.parse(this.responseText);
                let newPlanet = document.createElement('li');
                newPlanet.className = 'planetName';
                newPlanet.innerHTML = jsonResponse.name;
                document.querySelectorAll('.filmPlanets')[i].appendChild(newPlanet);
            })
        }
    }
})

