// test method
const string = 'all your base are belong to us'
const regex = /base/; 
const regex2 = new RegExp('base')
const isExisting = regex.test(string)
const isExisting2 = regex.test(string)
console.log(isExisting)
console.log(isExisting2)

const isReplacing = string.replace(regex)
console.log(isReplacing)


const isMatching = string.match(regex)
console.log(isMatching)

