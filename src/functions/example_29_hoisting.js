console.log('> Example 29');

// class MyName {
//   constructor(name) {
//     this.name = name;
//   }
//   fullName() {
//     return this.name;
//   }
// }

try {
  teaTime();
} catch (e) {
  console.log('error:', e);
}

let snack = 'scones';

teaTime();

// const vasia = new MyName('Vasia 231');
// const vladimir = new MyName('Vladimir');

console.log('vasia: fullName =', vasia.fullName());
// console.log('new object:', typeof teaTime, typeof new teaTime(), new teaTime());

function teaTime() {
  console.log('> \t -> teaTime');
  console.log('> \t -> teaTime: snack =', snack);
}
//
// teaTime.prototype.name = '';
// teaTime.prototype.fullName = function () {
//   return this.name;
// };

// Uncaught ReferenceError: snack is not defined

/*
 * function teaTime() {
 *   console.log(snack);
 * }
 *
 * let snack;  // no defined value assigned
 *
 * teaTime();
 * snack = 'scones'
 */
