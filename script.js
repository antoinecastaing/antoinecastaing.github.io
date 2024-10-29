const deck = ['9_of_diamonds.svg',
        'ace_of_clubs.svg',
        '7_of_hearts.svg',
        '6_of_diamonds.svg',
        '3_of_hearts.svg',
        '5_of_spades.svg',
        '4_of_hearts.svg',
        '2_of_spades.svg',
        'king_of_spades2.svg',
        '6_of_spades.svg',
        'king_of_hearts2.svg',
        '10_of_spades.svg',
        '10_of_diamonds.svg',
        'queen_of_clubs2.svg',
        'jack_of_clubs2.svg',
        'jack_of_spades2.svg',
        '7_of_clubs.svg',
        'jack_of_hearts2.svg',
        '8_of_spades.svg',
        'queen_of_diamonds2.svg',
        'ace_of_hearts.svg',
        '6_of_clubs.svg',
        '8_of_diamonds.svg',
        '9_of_hearts.svg',
        '7_of_diamonds.svg',
        '3_of_clubs.svg',
        '4_of_clubs.svg',
        '8_of_hearts.svg',
        '2_of_diamonds.svg',
        'queen_of_hearts2.svg',
        'queen_of_spades2.svg',
        '10_of_clubs.svg',
        '5_of_clubs.svg',
        'king_of_diamonds2.svg',
        '2_of_clubs.svg',
        'ace_of_diamonds.svg',
        '9_of_spades.svg',
        'ace_of_spades.svg',
        '5_of_diamonds.svg',
        '7_of_spades.svg',
        '3_of_spades.svg',
        '5_of_hearts.svg',
        '8_of_clubs.svg',
        '4_of_diamonds.svg',
        'jack_of_diamonds2.svg',
        'king_of_clubs2.svg',
        '10_of_hearts.svg',
        '3_of_diamonds.svg',
        '4_of_spades.svg',
        '2_of_hearts.svg',
        '6_of_hearts.svg',
        '9_of_clubs.svg']

const deck_container = document.getElementById('deck_container');
const card = document.createElement('img');
card.src = `./assets/cards_svg/card_back.svg`;
deck_container.appendChild(card)



function shuffle_deck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));
        
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function display_deck() {


    shuffle_deck(deck);


    let i = 0;

    const intervalId = setInterval(() => {

        card.src = `./assets/cards_svg/${deck[i]}`;
        i++;
        if (i > 52) {
            clearInterval(intervalId);
            card.src = `./assets/cards_svg/card_back.svg`;
        }
    }, 500);



}

document.getElementById('start').addEventListener('click', display_deck);