// Main reason to make use of promises is to avoid callback hell
// Promises allow asynchronous code to be written in a synchronous fashion
// async/await allows for even cleaner code however
// Usually when writing JavaScript code, methods will be used from libraries that return...
// ...promises, rather than being setup by ones self

// A promise is an object that returns a value, that will hopefully be returned in the future,...
// ...but not immediately

// Promise constructor is passed a callback, which accepts two arguments which are functions themselves
// Promises can be in one of three states (Pending, Rejected, Fulfilled)
// Pending -> Rejected/Fulfilled (can't go back to Pending)
// Need to use then/catch to retrieve promise.value
const promise = new Promise((resolve, reject) => {
  // resolve('helloWorld')
  reject('worldHello')
})

// console.log(promise)

promise.then((data) => console.log(data)).catch((err) => console.log(err))

const value = 2
const promiseTwo = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3)
  if (random === value)
    resolve('Correct Number')
  else
    reject('Wrong number')
})

promiseTwo.then((data) => console.log(data)).catch((err) => console.log(err))