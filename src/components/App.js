import data from '../data/webdev/webdev.js'

function cardsMemory() {
    const printCard = data.items.map((items) => {
      return `
  <div class="card-container">
    <div class="card">
      <div class="face front" style="background-color: ${items.bgColor}">
        <img class="logo" src="${items.image}" alt="movie picture">
        <p class="name"><strong>${items.id}</strong></p>
      </div>
      <div class="face back"></div>
    </div>
  </div>
  `;
    });
    document.getElementById('root').innerHTML = printCard.join("")
  }
  cardsMemory()

//   const App = () => {
//   const el = document.createElement('div');

//   el.className = 'App';
//   el.textContent = 'Hola mundo!';

//   return el;
// };

// export default App;
export default cardsMemory;
