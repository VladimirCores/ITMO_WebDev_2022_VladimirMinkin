console.log('> Example 15');

let food = 'sushi';

function eatEmUp() {
  let sauce = ' soy';

  function mixEmUp() {
    console.log('> \t -> eatEmUp -> mixEmUp: (food + sauce) =', food + sauce);
  }

  if (true) {
    for (let i in [0, 1]) {
      var fun = mixEmUp;
      console.log('for', i, fun);
    }
  }

  console.log('fun 2', fun);

  fun();
}

eatEmUp();
fun();
// Uncaught ReferenceError: mixEmUp is not defined
