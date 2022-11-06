
const gridDisplay = document.querySelector( '.grid' );
const scoreDisplay = document.getElementById( 'score' );

scoreDisplay.innerHTML = "0";
let score = 0;

const cards = [

	{
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    } 

]

//	Shuffle cards randomnly
cards.sort( () => 0.5 - Math.random() );

let prevcard = {
	name: undefined,
	ref: undefined
}

//	display initial cards
function showBoard(){

	for(var i = 0; i < cards.length; i++){
		
		const card = document.createElement( 'img' )
		card.setAttribute( 'src', 'images/blank.png' )	//	set all to blank.png
		card.setAttribute( 'data-id', i )

		card.addEventListener( 'click', flipCard )
		gridDisplay.appendChild( card )
	}
}
showBoard() 



//	logic for flipping cards
function flipCard(){

//	show clicked card
	const cardId = this.getAttribute( 'data-id' )
	this.setAttribute( 'src', cards[cardId].img );

//		logic if 2 cards are flipped
	const currcardname = cards[cardId].name;
	const card = this;

	//	If prevcard is not empty then either it matches or gets reset
	if( prevcard.name != undefined ){

		if(prevcard.name == currcardname ){

			//	update score & remove both cards with white card
			setTimeout( function(){
				prevcard.ref.setAttribute( 'src', 'images/white.png' );
				card.setAttribute( 'src', 'images/white.png' );

			//	REmove Event Listner
				card.removeEventListener( 'click', flipCard );
				prevcard.ref.removeEventListener( 'click', flipCard );

			//	Make prevcard empty
				prevcard.name = undefined
				prevcard.ref = undefined
			} ,500);
			
			//	Update Score
			scoreDisplay.innerHTML = ++score;
			//	Game Ended
			if( score == cards.length /2 ){
				gridDisplay.innerHTML = "You Won!!! With score of: " + score;
			}
		}
		else{
			
			//	filp prevcard & currentcard with blank cards
			setTimeout( function(){

				prevcard.ref.setAttribute( 'src', 'images/blank.png' );
				card.setAttribute( 'src', 'images/blank.png' );

			//	Make prevcard empty
				prevcard.name = undefined
				prevcard.ref = undefined
			} ,500 );
		}
		
	}
	//	Save this card as prev card
	else{
		prevcard.name = currcardname
		prevcard.ref = this
	}

}
























