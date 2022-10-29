console.log('> Example 8.1');

let bagels = { number: 5 };
let bagelsNumber = bagels.number;
let bagelObject = bagels; //{ ...bagels };

function eatBagel(number) {
  return number - 1;
}

function eatBagelObject(bagelsObj) {
  bagelsObj.number -= 1;
  if (bagelsObj.number === 0) {
    console.log('> \t -> eatBagel: Oh nO, Out Of bagles!');
  } else {
    console.log(`> \t -> eatBagel: Yummy. There are ${bagelsObj.number} left!`);
  }
}

// bagels.number == 5
// eatBagelObject(bagels);
bagels.number = eatBagel(bagels.number);
console.log('> \t : bagels =', bagels, bagelObject, bagelsNumber);
// bagels.number == 4
eatBagelObject(bagelObject);
console.log('> \t : bagels =', bagels, bagelObject, bagelsNumber);
// bagels.number == 3
eatBagelObject(bagelObject);
console.log('> \t : bagels =', bagels, bagelObject, bagelsNumber);
// bagels.number == 2
