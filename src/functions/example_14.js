console.log('> Example 14');

function chopIt(add) {
  let pieces = 10 + add;
  console.log('> \t -> chopIt : pieces =', pieces);
  return pieces;
}

let results = chopIt(1);

console.log('> \t : result =', results);

console.log('> \t : pieces =', pieces);

// В глобальной области видимости нельзя использовать переменные из функционального "скоупа"
// Uncaught ReferenceError: pieces is not defined
