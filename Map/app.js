// map always returns a new array
// doesn't change the size of the original array

const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer'
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer'
  },
  {
    name: 'susan',
    age: 35,
    position: 'human resources director'
  }
]

// const ages = people.map((person) => {
//   return person.age * 2
// })

const ages = people.map((person) => person.age * 2)

console.log(ages)

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20
  }
})

console.log(newPeople)

const names = people.map((person) => `<h3>${person.name}</h3>`)
const result = document.querySelector('#result')
result.innerHTML = names.join('')