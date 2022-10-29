console.log('> Example 20');

let bread = 'sourdough';

function makeSandwich() {
  let meat = ' spam';
  let condiment = ' mayo';

  function getCheese() {
    let cheese = ' swiss';
    console.log('> \t : getCheese -> condiment:', condiment);

    if (cheese) {
      var condiment = ' sriracha';
    }

    console.log('> \t : getCheese -> condiment:', condiment);

    return cheese + condiment;
  }

  return bread + meat + getCheese();
}

console.log('> \t : makeSandwich() =', makeSandwich());

// sourdough spam swiss sriracha
