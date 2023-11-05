const characterList = document.getElementById("character-list");
const searchInput = document.getElementById("search");
const loadMoreButton = document.createElement("button");
let nextPage = 1; 

async function fetchCharacters(query, page) {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`);
        const data = await response.json();
        const characters = data.results;

        if (page === 1) {
            characterList.innerHTML = ""; 
        }

        characters.forEach((character) => {
            const characterCard = document.createElement("div");
            const characterCardOutter = document.createElement("div");
            characterCardOutter.className = "character-card-outter";
            characterCard.className = "character-card";
            characterCard.innerHTML = `
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
                <p>Species: ${character.species}</p>
                <p>Origin: ${character.origin.name}</p>
               
            `;
            characterCardOutter.appendChild(characterCard);
            characterList.appendChild(characterCardOutter);
        });

        if (data.info.next) {
            nextPage++; 
        } else {
            loadMoreButton.style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function handleSearchInput() {
    const query = searchInput.value.trim();
    fetchCharacters(query, 1);
    loadMoreButton.style.display = "block"; 
}


function handleLoadMore() {
    const query = searchInput.value.trim();
    fetchCharacters(query, nextPage);
}


searchInput.addEventListener("input", handleSearchInput);
loadMoreButton.textContent = "Muestra más";
loadMoreButton.className = "button-more";
loadMoreButton.style.display = "block"; 
loadMoreButton.addEventListener("click", handleLoadMore);
const backgroundDiv = document.querySelector(".background-image");
backgroundDiv.appendChild(loadMoreButton);


fetchCharacters("", 1);
