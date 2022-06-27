const text = document.querySelector("input").value || "il y a 1 pantalon, 2 pulls, and 10 slips"

console.log("# Before removing product")
console.log(text)

// Removing one product from stock
const regex = /(\d+)\s*(\w+)/g;
const stock = text.replace(regex, (match) => {
	let [quantity, product] = match.split(' ')
  	quantity = parseInt(quantity) - 1
  	const str = `${quantity === 0 ? 'zéro' : quantity} ${quantity > 1 ? product : (product.slice(-1) === 's' ? product.slice(0, -1) : product)}`
  	return str
})

console.log("# After removing product")
console.log(stock)

// Other way (with a `stock` object { "pantalon": 1, "pull": 2, "slip": 10 })
/*
const stock = text.match(regex)
	.reduce((acc, cur) => {
    	let [quantity, product] = cur.split(' ')
    	if (product.slice(-1) === 's') product = product.slice(0, -1)
    	acc[product] = (acc[product] || 0) + parseInt(quantity)
    	return acc
  	}, {})

const removeProduct = () => {
  	Object.keys(stock).forEach(product => {
    	stock[product] = stock[product] - 1
  	})
}

const printStock = () => {
  	let str = 'il y a'
  	const arr = Object.entries(stock)
  	arr.forEach(([product, quantity], i) => {
    	str += ` ${quantity === 0 ? 'zéro' : quantity} ${product}${quantity > 0 ? 's' : ''}`
    	str += `${i === arr.length - 2 ? ' and' : (i === arr.length - 1 ? '.' : ',')}`
  	})
  	console.log(str)
}

printStock()
removeProduct()
printStock()
*/
