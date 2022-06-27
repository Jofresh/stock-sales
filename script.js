const text = document.querySelector("input") .value

const regex = /(\d+)\s*(\w+)/g;
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
