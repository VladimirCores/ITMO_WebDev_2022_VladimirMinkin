console.log('> Example 11');

var a = 'ham';
let b = ' spam';

function addThem() {
  console.log('> \t -> addThem:', a + b);
}

addThem();

// Ключевое слове let никак не влияет на доступ к этой переменной внутри локальной "скоупа"
