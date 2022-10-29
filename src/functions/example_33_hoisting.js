console.log('> Example 33');

teaTime();
var teaTime = 'shortcake';

teaTime();
function teaTime() {
  console.log('> \t -> teaTime: custard tart');
}

// Uncaught SyntaxError: Identifier 'teaTime' has already been declared

/*
 * function teaTime() {
 *   console.log('custard tart');
 * }
 *
 * teaTime(); // logs 'custard tart'
 *
 * teaTime = 'shortcake';
 * teaTime(); // cannot call a function on a variable that isn't assigned to one
 */
