function makeUppercase(value) {
  console.log(value.toUpperCase())
}

function reverseString(value) {
  console.log(value.split('').reverse().join(''))
}

function handleName(name, cb) {
  const fullName = `${name} krajnc` //template string
  cb(fullName)
}

handleName('dylan', makeUppercase)
handleName('dylan', reverseString)
handleName('dylan', function(value) {
  console.log(value)
})
handleName('dylan', (value) => console.log(value))

const btn = document.querySelector('.btn')
btn.addEventListener('click', function() {
  console.log('helloWorld');
})

//cb array methods are used commonly with array methods, setTimeout, event listeners etc...