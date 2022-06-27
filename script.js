const text = document.querySelector("input").value || "il y a 1 pantalon, 2 pulls, and 10 slips"

console.log("### Before removing product")
console.log(text)

// Removing one product from stock
const regex = /(\d+)\s*(\w+)/g;
const stock = text.replace(regex, (match, quantity, product) => {
	quantity = parseInt(quantity) - 1
	if (quantity === 1) if (product.slice(-1) === 's') product.slice(0, -1)
	if (quantity === 0) quantity = 'zéro'
	return `${quantity} ${amount}`
})

console.log("### After removing product")
console.log(stock)
