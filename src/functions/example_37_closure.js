console.log('> Example 37');

function shoutBeans(type) {
  let beans = type;
  let logMessage = '(closure) beans.toUpperCase() =';

  return function (number) {
    console.log(`\t ${logMessage}`, beans.toUpperCase() + ` number = ${number}`);
  };
}

const type = { name: 'blue' };
let loudBeans = shoutBeans('blue');

loudBeans();
loudBeans(1);
loudBeans(3);

function createMultiplyBy(number) {
  return (input) => input * number;
}

function createWelcomeMessage(message) {
  return (input) => message + ': ' + input;
}

const multiplyBy56 = createMultiplyBy(56);
const welcomeGuestToOurFestival = createWelcomeMessage('Welcome guest to our festival');

let counter = 0;

const handler = () => {
  console.log(` > multiplyBy56(${++counter})`, multiplyBy56(counter));
  console.log(` > welcomeGuestToOurFestival`, welcomeGuestToOurFestival('Vladimir'));
  console.log(` > welcomeGuestToOurFestival`, welcomeGuestToOurFestival('Dmitry'));
  console.log(` > welcomeGuestToOurFestival`, welcomeGuestToOurFestival('Arthur'));
};

document.onclick = handler;

/*
 * function shoutBeans() {
 *   let beans
 *   beans = 'green'
 *
 *   return function() {
 *     console.log(beans.toUpperCase());
 *   }
 * }
 *
 * let loudBeans
 * loudBeans = shoutBeans();
 *
 * loudBeans();
 */
