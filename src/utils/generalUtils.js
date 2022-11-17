const delay = (time) =>
  new Promise((resolve, reject) => {
    console.log('> delay -> created');
    // document.getElementById('spinner').style.display = 'block';
    setTimeout(() => {
      console.log('> delay -> setTimeout: ready');
      resolve(time);
    }, time);
  });

export { delay };
