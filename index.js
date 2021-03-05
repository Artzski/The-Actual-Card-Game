//Card Game
let deck = [];
let y = 0;
let dShuffle = [];
for (let i=0; i<3; i++){
  for(let x=0; x<10; x++){
    if (i == 0){
      deck.push(`R ${x+1}`);
    }
    if (i == 1){
      deck.push(`B ${x+1}`);
    }
    if (i == 2){
      deck.push(`Y ${x+1}`);
    }
  }
}
console.log("Here is the deck");
console.log(deck);
//shuffling here
i = 29;
for(i; i>=0; i--){ 
  y = Math.floor((Math.random()*i));
  dShuffle.push(deck[y]);
  deck.splice(y,1);
}
console.log(dShuffle);
//Card Comparisons
p1Score = 0
p2Score = 0
card = dShuffle[0];
dShuffle.splice(0, 1);
card2 = dShuffle[0];
dShuffle.splice(0, 1);

if (card.charAt(0) == 'R' && card2.charAt(0) == 'B'){
  p1Score ++
}
if (card.charAt(0) == 'B' && card2.charAt(0) == 'Y'){
  p1Score ++
}
if (card.charAt(0) == 'Y' && card2.charAt(0) == 'R'){
  p1Score ++
}
if (card2.charAt(0) == 'R' && card.charAt(0) == 'B'){
  p2Score ++
}
if (card2.charAt(0) == 'B' && card.charAt(0) == 'Y'){
  p2Score ++
}
if (card2.charAt(0) == 'Y' && card.charAt(0) == 'R'){
  p2Score ++
}
if (card.charAt(0) == card2.charAt(0)){
  if (card.charAt(2) > card2.charAt(0)){
    p1Score ++
  }else{
    p2Score ++
  }
}
console.log(card, card2)
console.log(p1Score, p2Score)
