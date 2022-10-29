console.log('> Example 3');

let dessert = 'tart';

if (dessert) {
  let dessert = 'cannoli';
  if (dessert.length < 5) {
    let dessert = '123';
    console.log('> \t : quick snack', dessert);
  } else {
    console.log('> \t : lengthy treat', dessert);
  }
} else {
  console.log('> \t : no dessert...');
}

// {
//   dessert: 'tart',
//   if1: {
//     dessert: 'dada',
//     if2: {
//       dessert1: '123',
//       function : 'console.log("", dessert)'
//     }
//   }
//   else1: {
//
//   }
// }

// Внутренние блоки имеют доступ к глобальному "споку", к переменной desert
// но новая локальная переменная с тем же именем "переписывает/перекрывает" (shadows)
// внешную переменную
