// allows an iterable to spread/expand individually inside a receiver
// i.e split into single items and copy them (pass by copy, not reference)

const udemy = 'udemy'
const letters = [...udemy]
console.log(letters)

const boys = ['john', 'peter', 'bob']
const girls = ['susan', 'anna']
const bestFriend = 'arnold'
const friends = [...boys,  bestFriend, ...girls]
console.log(friends)

// pass by reference example
// const newFriends = friends
// newFriends[0] = 'nancy'
// console.log(friends)
// console.log(newFriends)

// pass by copy example
const newFriends = [...friends]
newFriends[0] = 'nancy'
console.log(friends)
console.log(newFriends)

const person = { name: 'john', job: 'developer'}
const newPerson = {...person, city: 'chicago'}
newPerson.name = 'mark'
console.log(person)
console.log(newPerson)