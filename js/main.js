let elResult = document.querySelector('.pokemons__result');
let elList = document.querySelector('.pokemons__list');

for(let pokemon of pokemons) {
  //CREATE
  let newItem = document.createElement('li')
  let newCard = document.createElement('div')
  let newImg = document.createElement('img')
  let newCardBody = document.createElement('div')
  let newCardTitle = document.createElement('h5')
  let newCardDate = document.createElement('h6')
  let newCardRating = document.createElement('p')
  let newCardLanguage = document.createElement('p')

  //SET ATTRIBUTE
  newItem.setAttribute('class', 'pokemons__item')
  newCard.setAttribute('class', 'card pokemons__card')
  newImg.setAttribute('class', 'card-img-top')
  newImg.setAttribute('src', pokemon.img)
  newCardBody.setAttribute('class', 'card-body')

  //TEXT CONTENT
  newCardTitle.textContent = pokemon.name
  newCardDate.textContent = pokemon.candy
  newCardRating.textContent = pokemon.weight
  newCardLanguage.textContent = pokemon.egg

  //APPEND CHILD
  elList.appendChild(newItem)
  newItem.appendChild(newCard)
  newCard.appendChild(newImg)
  newCard.appendChild(newCardBody)
  newCardBody.appendChild(newCardTitle)
  newCardBody.appendChild(newCardDate)
  newCardBody.appendChild(newCardRating)
  newCardBody.appendChild(newCardLanguage)
}