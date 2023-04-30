// The following makes use of the example provided in the `Callback-Hell` branch...
// ...and replaces callbacks with promises

// In Sequence
// First - 1s, red
// Second - 3s, blue
// Third - 2s, green

const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//   addColor(1000, '.first', 'red', 'helloWorld')
//     .then((data) => addColor(3000, '.second', 'blue', data))
//     .then((data) => {
//         console.log(data)
//         addColor(2000, '.third', 'green')
//       })
//     .catch((err) => console.log(err))
// })

btn.addEventListener('click', () => {
  addColor(1000, '.first', 'red')
    .then(() => addColor(3000, '.second', 'blue'))
    .then(() => addColor(2000, '.third', 'green'))
    .catch((err) => console.log(err))
})

function addColor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if(element) {
      setTimeout(() => {
        element.style.color = color
        resolve()
      }, time)
    }
    else
      reject(`Cannot access element: ${selector}`)
  })
}