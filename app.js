const container = document.querySelector('main')

const btnGetApi = document.querySelector('#btn-get-api')

const URL = 'https://thesimpsonsquoteapi.glitch.me/quotes'

btnGetApi.addEventListener('click', getAPI)
function getAPI () {
    const options = {method: 'GET'};

    fetch('https://thesimpsonsquoteapi.glitch.me/quotes', options)
      .then(response => response.json())
      .then(data => createCard(data[0]))
      .catch(err => console.error(err));
}

function createCard(Simpson) {
     const {quote, image, character} = Simpson; 

     const containerCard = document.createElement('div')
     containerCard.classList.add('container')

     const imgCard = document.createElement('img')
     imgCard.src = image
     imgCard.alt = character

     const quoteCard = document.createElement('p')
     quoteCard.textContent = quote

     containerCard.appendChild(imgCard)
     containerCard.appendChild(quoteCard)

     container.appendChild(containerCard)
}