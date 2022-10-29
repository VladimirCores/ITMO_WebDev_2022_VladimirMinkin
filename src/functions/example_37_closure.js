console.log('> Example 37');

function shoutBeans(type) {
  let beans = type;
  return function (number) {
    console.log('\t (closure) beans.toUpperCase() =', beans.toUpperCase() + ` number = ${number}`);
  };
}

let loudBeans = shoutBeans('blue');

loudBeans();
loudBeans(1);
loudBeans(3);

function creatMultiplyBy(number) {
  return (input) => input * number;
}

const multiplyBy56 = creatMultiplyBy(56);

let counter = 0;

const handler = () => {
  console.log(' > multiplyBy56()', multiplyBy56(++counter));
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
