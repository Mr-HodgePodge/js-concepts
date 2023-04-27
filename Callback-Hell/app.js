// after 1s first red
// after 3s second blue
// after 2s third green
// in sequence, not parallel

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const btn = document.querySelector('.btn');

// in parallel
// btn.addEventListener('click', () => {
//   setTimeout(() => {
//     first.style.color = 'red'
//   }, 1000)
//   setTimeout(() => {
//     second.style.color = 'blue'
//   }, 3000)
//   setTimeout(() => {
//     third.style.color = 'green'
//   }, 2000)
// })

// in sequence
btn.addEventListener('click', () => {
  setTimeout(() => {
    first.style.color = 'red'
    setTimeout(() => {
      second.style.color = 'blue'
      setTimeout(() => {
        third.style.color = 'green'
      }, 2000)
    }, 3000)
  }, 1000)

  // cb advantage: do not have to change other values based on first value (e.g. change timeouts to 1, 4, 6 seconds and use sequential code example
  // cb disadvantage: difficult to read and maintain, rather use promises or async/await
})