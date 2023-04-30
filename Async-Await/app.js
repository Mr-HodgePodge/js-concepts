// async/await allows for asynchronous code to be written in a synchronous fashion,...
//...instead of endlessly nesting callbacks
// async must be present (within a function), always returns a promise
// await waits until the promise is settled
// error handling with a try/catch block

// const example = async ()=> {
//   return 'helloWorld'
// }
//
// async function someFunc () {
//   const result = await example()
//   console.log(result)
//   console.log('Printed Second')
// }
//
// console.log(example())
// someFunc()

const users = [
  { id: 1, name: 'john' },
  { id: 2, name: 'susan' },
  { id: 3, name: 'anna' }
]

const articles = [
  { userId: 1, articles: ['one', 'two', 'three'] },
  { userId: 2, articles: ['four', 'five'] },
  { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
]

// Example chaining .then without async await
// getUser('susan')
//   .then((user) =>
//     getArticles(user.id))
//     .then((articles) => console.log(articles))
//   .catch((err) => console.log(err))

// Example making use of async/await with error catching
const getData = async () => {
  try {
    const user = await getUser('susans')
    // don't need to check if user exists, since error will be caught by the try/catch block
    console.log(getArticles(user.id))
  } catch (err) {
    console.log(err)
  }
}

getData()

function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name)

    if (user) {
      return resolve(user)
    } else {
      reject(`No user exists with the name: ${name}`)
    }
  })
}

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId)

    if(userArticles) {
      return resolve(userArticles)
    } else {
      reject(`no articles exist with the userId: ${userId}`)
    }
  })
}