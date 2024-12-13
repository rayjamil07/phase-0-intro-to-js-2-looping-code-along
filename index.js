const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const emptyCards = [];

function writeCards(names,event){
   for(let i=0; i < names.length; i++){
    emptyCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
   debugger;
   }
   return emptyCards;
}

//while loops
// while(condition){
//     initialization
// }
function countDown(){
    let countUp = 0;
    while(countUp < 11){
        console.log(countUp++);
    }
    return countUp;
}