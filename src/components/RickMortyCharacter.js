const PREFIX_URL = "https://rickandmortyapi.com/api/character/";
const LOADING_GIF = "cargando.gif";

class RickMortyCharacter extends HTMLElement {
  constructor() {
    super();
    this.data = {};
    this.attachShadow({ mode: "open" });
    this.renderLoading();
  }

  get styles() {
    return /* css */`    
      .container {
        border: 5px solid black;
        display: inline-flex;
    }
    img{
        height: 128px;
        width: 128px;
    }
    
    
    `;
  }

  fetchData() {
    fetch(`${PREFIX_URL}${this.charId}`)
      .then(response => response.json())
      .then(data => {
        this.data = {
          name: data.name,
          status: data.status,
          species: data.species,
          gender: data.gender,
          origin: data.origin.name,
          image: data.image
        };
        // setTimeout(() => this.render(), 3000);
        this.render();
      });
  }

  connectedCallback() {
    this.charId = this.getAttribute("char-id");
    this.fetchData();
  }

  renderLoading() {
    this.shadowRoot.innerHTML = `<img src="${LOADING_GIF}" alt="loading">`;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>
    ${this.styles}
    </style>
    <div class="container">
    <div class ="data">
        <div class="name">${this.data.name}</div>
        <div class="status">${this.data.status}</div>
        <div class="species">${this.data.species}</div>
        <div class="gender">${this.data.gender}</div>
        <div class="origin">${this.data.origin}</div>
    </div>
    <img src="${this.data.image}" alt="${this.data.name}" class="image">
  </div>`;
  }
}

customElements.define("rick-morty-character", RickMortyCharacter);
