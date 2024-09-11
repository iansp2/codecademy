const btn = document.querySelector('button');

btn.onclick = () => {
  alert('you clicked me!');
}

const wait = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('thank you for waiting');
  }, 1000);
});

wait.then(doSomething).catch(handleErr)