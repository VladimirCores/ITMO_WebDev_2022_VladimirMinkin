console.log('> Example 28');

function stringCheese(cheese) {
  let cheese = 'sharp';
  cheese = 'gornoaltajski';
  console.log('> \t -> stringCheese: cheese =', cheese);
  return cheese;
}

const abd = stringCheese('babybel'); // Uncaught SyntaxError: Identifier 'cheese' has already been declared
