console.log('> Example 24');

function stringCheese(cheese) {
  console.log('> \t -> stringCheese: cheese =', cheese);
  let cheddar = 'sharp';
  cheese = cheddar;
  console.log('> \t -> stringCheese: cheese =', cheese);
}

stringCheese('blue');
