import "./components/RickMortyCharacter.js";
const container = document.querySelector(".container");

for (let i = 1; i < 15; i++) {
  const rickMortyCharacter = document.createElement("rick-morty-character");
  rickMortyCharacter.setAttribute("char-id", i);
  container.appendChild(rickMortyCharacter);
}
