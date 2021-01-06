
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
    
    if (lockBoard) return;
    if (this === firstCard) return;

   this.classList.add('flip');
   if (!hasFlippedCard) {
      //first click 
      hasFlippedCard = true;
      firstCard = this;

      return;
   } 
   //second click
   
   secondCard = this;  
   
   checkForMatch();
   

function checkForMatch() {
    let isMatch = firstCard.dataset.img === secondCard.dataset.img;
        
    isMatch ? disableCards() : unflipCards();
      
}
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard()
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');  
       
    resetBoard();
  }, 1000)
}


function resetBoard() {  // to let you click the card you have clicked befor
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}

(function shuffle() { // when you refresh the site or enter the level agin it will shuffle the cards
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
})();




cards.forEach(card => card.addEventListener('click', flipCard))};