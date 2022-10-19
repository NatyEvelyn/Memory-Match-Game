import data from '../data/webdev/webdev.js'

function cardsMemory() {
    const printCard = data.items.map((items) => {
      return `
  <div class="card-container">
    <ul class="info">
      <img class="devs-logo" src="${items.image}" alt="movie picture">
      <li class="devs-name"><strong>${items.id}</strong></li>
      <li class="devs-color"><strong>Description:</strong> ${items.bgColor}</li>
      <img class="devs-logo" src="${items.image}" alt="movie picture">
      <li class="devs-name"><strong>${items.id}</strong></li>
      <li class="devs-color"><strong>Description:</strong> ${items.bgColor}</li>
    </ul>
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
