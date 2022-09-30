// lets put our paterns in an object to begin with
const patterns = {
  telephone: /^[1-9]{11}$/, // or better /^\d{11}$/
  username: /^.{5,12}$/, // will catching anything even "¿", but between 5 & 12
  // ninja says /^[a-z\d]{5,12}$/i
  // any letter from a to z, and any digit, with a length of 5 to 12, will also catch UPPCASES with /i
  password: /^[\w@-]{8,20}$/i, // dosnt care about alphanumric thats bad : need a "and" like &&
  slug: /^[a-z\d-]{8,20}$/,
  // the boss level lmao
  // the "." has a special meaning in regex, means where u looking for a . better use \.
  email: /^[a-z\d.]+@[a-z]+\.[a-z]+.?[a-z]+?$/
}

// the ninja way to handle a node of inputs
const inputs = document.querySelectorAll('input')

console.log(inputs)

inputs.forEach((input) => {
  input.addEventListener('keyup', (event) => {
    console.log(event.target.attributes.name.value) // ENORME !!
    // tres intéressant comme pattern et commande
    //console.log(event.target.value)
    //console.log(event.value)
    // validate(event.target, patterns['telephone']) // WEIRD WAY to call an object property tho..
    validate(event.target, patterns[event.target.attributes.name.value])
    // this way there is not IF statements
  })
})

// lets make our own function to validate with the input.value & names

function validate(field, regex) {
  // will return false unless field.value is equal to 11 and it's digit
  // console.log(regex.test(field.value))
  if (regex.test(field.value)) // if it's true ( we matchin )
    field.className = 'valid'
  else 
    field.className = 'invalid'
}