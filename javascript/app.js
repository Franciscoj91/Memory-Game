//tarjetas para el juego de memoria
const cardArray = [
    {
        name: 'eren',
        img: 'images/eren-jeager.png'
    },
    {
        name: 'armin',
        img: 'images/armin-arlert.png'
    },
    {
        name: 'mikasa',
        img: 'images/mikasa-ackerman.png'
    },
    {
        name: 'levi',
        img: 'images/levi-ackerman.png'
    },
    {
        name: 'reiner',
        img: 'images/reiner-braun.png'
    },
    {
        name: 'zeke',
        img: 'images/zeke-jeager.png'
    },
    {
        name: 'eren',
        img: 'images/eren-jeager.png'
    },
    {
        name: 'armin',
        img: 'images/armin-arlert.png'
    },
    {
        name: 'mikasa',
        img: 'images/mikasa-ackerman.png'
    },
    {
        name: 'levi',
        img: 'images/levi-ackerman.png'
    },
    {
        name: 'reiner',
        img: 'images/reiner-braun.png'
    },
    {
        name: 'zeke',
        img: 'images/zeke-jeager.png'
    },
];

//necesitamos que se acomoden de manera aleatoria
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon= [];



function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/fondo.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
        
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1]

    if ( optionOneId == optionTwoId) {
        alert('You need to select another card');
        cards[optionOneId].setAttribute('src','images/fondo.png');
    } else if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match');
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');

        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);

        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src','images/fondo.png');
        cards[optionTwoId].setAttribute('src','images/fondo.png');

        alert('Try again');
    }
    resultDisplay.innerHTML = cardsWon.length
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations, you found them all!';
    }
}

function flipCard() {
   
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}