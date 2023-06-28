console.log("hello");
console.log("My name is Slim");

var pirate1Name = "Blackbeard";
var pirate2Name = "Jean Lafitte";
var pirate3Name = "Edward Teach";
var pirate4Name = "Jack Sparrow";
var numPiratesCarribean = 4;
var numPiratesPacific = 5;
var numPiratesAtlantic = 8;
var numPiratesIndian = 2;
var numPiratesArctic = 2;
var areSeasSafe = false;
var tooManyPirates = true;
var numPiratesTotal = numPiratesArctic + numPiratesAtlantic + numPiratesCarribean + numPiratesIndian + numPiratesPacific;
var maxNumPirates = 20;
var pirateChest = ["pieces of eight", "dagger", "pistol", "rum", "cutlass", "spyglass", "sextant"];
var maxChestItems = 16;
var shotTypes = ["solid shot", "chain shot", "grape shot"]

pirate2Name = "Dominique You";

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
console.log(numPiratesTotal);

if (numPiratesTotal >= maxNumPirates) {
    console.log("Dead men tell no tales!");
    tooManyPirates = true;
} else {
    console.log("Ahoy, matey!")
    tooManyPirates = false;
    areSeasSafe = true;
}

if (areSeasSafe) {
    console.log("Set sail!");
} else {
    console.log("Shiver me timbers!");
}

console.log(pirateChest.length);
console.log(pirateChest[3]);
console.log("Be sure to take yer " + pirateChest[5] + " with ye!");
pirateChest[2] = "cannon";
console.log(pirateChest[2]);
console.log(pirateChest);

if (pirateChest.length < maxChestItems) {
    console.log("Ye can hold more cargo, matey!");
} else {
    console.log("She be running low in the water!");
}

for (i = 0; i < pirateChest.length; i++) {
    console.log("There be " + pirateChest[i] + " in a dead man's chest...");
}

for (i = 0; i < shotTypes.length; i++) {
    console.log("We be needin' " + shotTypes[i] + ", matey!");
}

function pirateEquip() {
    console.log(pirate2Name + " has " + pirateChest[1]);
    console.log("---------------------------");
    return;
}

pirateEquip();

function sailsSet(x, y, z) {
    var pirate5Name = "Roberts";
    console.log(x + ", " + y + ", and " + z + " are set, matey!");
    console.log(pirate5Name);
    console.log("--------------------------");
    return;
}

sailsSet("Topsails", "Mainsails", "Courses");

pirateChest.sort();
console.log(pirateChest);

pirateChest.push("pistol", "rapier");
console.log(pirateChest);

var pirateKnapsack = pirateChest.slice(6);
console.log(pirateKnapsack);

var pirate6Name = pirate2Name.replace("You", "Pierre");
console.log(pirate6Name);
console.log(pirate2Name);

var myWeapon = pirateChest.shift();
console.log(pirateChest);
console.log(myWeapon);

var mySecondWeapon = pirateChest.pop();
console.log(pirateChest);
console.log(mySecondWeapon);

pirateChest.concat(mySecondWeapon);
console.log(pirateChest);
console.log(mySecondWeapon);

var allPirateEquip = pirateChest.concat(mySecondWeapon);
console.log(allPirateEquip);

var upMySecondWeapon = mySecondWeapon.toUpperCase();
console.log(upMySecondWeapon);



