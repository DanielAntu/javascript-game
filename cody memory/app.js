document.addEventListener('DOMContentLoaded', () => {
    // carregamento dos cards

    const cardArray = [
        {
            name: 'ganhou',
            img: 'images/ganhou.png'
        },

        {
            name: 'ganhou',
            img: 'images/ganhou.png'
        },

        {
            name: 'direita',
            img: 'images/direita.png'
        },

        {
            name: 'direita',
            img: 'images/direita.png'
        },

        {
            name: 'esquerda',
            img: 'images/esquerda.png'
        },

        {
            name: 'esquerda',
            img: 'images/esquerda.png'
        },

        {
            name: 'pulo',
            img: 'images/pulo.png'
        },

        {
            name: 'pulo',
            img: 'images/pulo.png'
        },

        {
            name: 'tras',
            img: 'images/tras.png'
        },

        {
            name: 'tras',
            img: 'images/tras.png'
        },

        {
            name: 'correndo',
            img: 'images/correndo.png'
        },

        {
            name: 'correndo',
            img: 'images/correndo.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')

    const resultDisplay = document.querySelector('#results')
    var cardChosen = []
    var cardChosenId = []
    var pares = []

    // Criando a tela
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/card.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // conferindo pares
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardChosenId[0]
        const optionTwoId = cardChosenId[1]

        // Clicar duas vezes no mesmo card
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/card.png')
            cards[optionTwoId].setAttribute('src',' images/card.png')
            alert('Você clicou na mesma imagem')
        } else if (cardChosen[0] == cardChosen[1]) {
            alert('Você conseguiu um par!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            pares.push(cardChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/card.png')
            cards[optionTwoId].setAttribute('src', 'images/card.png')
            alert('Ops! Jogue novamente :)')
        }

        cardChosen = []
        cardChosenId = []
        resultDisplay.textContent = pares.length

        if (pares.length == cardArray.length/2) {
            resultDisplay.textContent = 'Parabéns! Você encontrou todos os pares!'
        }
    }

    // Virando cards
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardChosen.length == 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})