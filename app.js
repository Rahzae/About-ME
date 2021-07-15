'use strict'
console.log('hello codefellows')

// question
let placesVisit = prompt('Have you ever been to Argentina?');
console.log(placesVisit);
//Allow different letter case without changing orig input.
let places = placesVisit.toLowerCase();
//user input lowercased
console.log(places);
//take user input and give response based off input.
if (places === 'yes' || places === 'y') {
  alert('im jealous!');
} else if (places === 'no' || places === 'n') {
  alert('No time like the present');
} else {
  alert('I didn\'t get that');
}

let moviesSeen = prompt('Have you ever seen the sandlot');
console.log(moviesSeen);

let movie = moviesSeen.toLowerCase();

console.log(movie);

if (movie === 'yes' || movie === 'y') {
  alert('Classic Right!?');
} else if (movie === 'no' || movie === 'n') {
  alert('ya killin me smalls!');
} else {
  alert('I didn\'t get that');
}

let bhc = prompt('Have you seen any of the Beverly hills cops');
console.log(bhc);

let bhcSeen = bhc.toLowerCase();

console.log(bhcSeen);

if (bhcSeen === 'yes' || bhcSeen === 'y') {
  alert('Axel Foley!!!!');
} else if (bhcSeen === 'No' || bhcSeen === 'n') {
  alert('you should');
} else {
  alert('I didn\'t get that');
}

let photo = prompt('Are Rahzaes photos any good?');
console.log(photo);

let critic = photo.toLowerCase();

console.log(critic);

if (critic === 'yes' || critic === 'y') {
  alert('Thank You Means Alot');
} else if (critic === 'No' || critic === 'n') {
  alert('Nobody asked you Javascript isnt a body');
} else {
  alert('I didn\'t get that');
}

let Dakota = prompt('know anyone from either Dakota?');
console.log(Dakota);

let nsDakota = Dakota.toLowerCase();

console.log(nsDakota);

if (nsDakota === 'yes' || nsDakota === 'y') {
  alert('The fact i never hear anything about there makes me wanna go see what its like.');
} else if (nsDakota === 'No' || nsDakota === 'n') {
  alert('me neither');
} else {
  alert('I didn\'t get that');
}



