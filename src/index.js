export function calculateTotal(items, tax) {
    let total = 0
    items.forEach(item => {
        total = total + item.price
        if (item.taxable === true) {
            let taxPrice = item.price * Math.abs(tax)
            total = total + taxPrice
        }
    })
    return total
}
