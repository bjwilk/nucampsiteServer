let private = 4

let generator = 3

let exchange = Math.pow(generator, private) % 17

console.log(exchange)

let other = 14

let secret = Math.pow(other, private) % 17

console.log(secret)