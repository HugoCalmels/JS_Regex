const time = new Date().toGMTString()
console.log(time)

let regex = /[0-9]+:[0-9]+:[0-9]+/ 

let res = time.match(regex)
console.log(res[0])

