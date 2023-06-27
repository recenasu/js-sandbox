console.log("hello");
console.log("My name is Slim");

var pirate1Name = "Blackbeard"
var pirate2Name = "Jean Lafitte"
var pirate3Name = "Edward Teach"
var pirate4Name = "Jack Sparrow"
var numPiratesCarribean = 4
var numPiratesPacific = 5
var numPiratesAtlantic = 8
var numPiratesIndian = 2
var numPiratesArctic = 2
var areSeasSafe = false
var tooManyPirates = true

pirate2Name = "Dominique You"

console.log(pirate1Name + " and " + pirate2Name);
console.log(pirate2Name + " had a pirate base near New Orleans");
console.log("There are " + numPiratesCarribean + " pirates in the Carribean");

console.log(typeof pirate1Name);
console.log(typeof numPirates);
console.log(typeof areSeasSafe);

console.log(numPiratesArctic + numPiratesAtlantic);
console.log(numPiratesAtlantic / numPiratesArctic);
console.log(numPiratesPacific % numPiratesArctic);

console.log(numPiratesArctic <= numPiratesAtlantic);
console.log(numPiratesCarribean == numPiratesAtlantic);
console.log(tooManyPirates && areSeasSafe);
console.log(tooManyPirates || areSeasSafe);
