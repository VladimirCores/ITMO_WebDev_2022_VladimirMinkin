console.log('> Example 2');

let dessert = 'ice cream';

if (dessert) {
  if (dessert.length < 5) {
    console.log('> \t: quick snack', dessert);
  } else {
    console.log('> \t: lengthy treat', dessert);
  }
}

// Все вложенные if блоки имеют доступ к глобальному "скопу"
