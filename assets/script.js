// access the button with id of 'quantity-up'
const plusBtn = document.querySelector('#quantity-up')
const minusBtn = document.querySelector('#quantity-down')
let productQuantity = document.querySelector('.total-quantity')

let quantity = 1

//  add event listener to the + button
plusBtn.addEventListener('click', function() {
    quantity++
    productQuantity.textContent = `Quantity: ${quantity}`
})

minusBtn.addEventListener('click', function(){
    // console.log('minus clicked')
    // quantity--
    if (quantity > 0) {
        quantity--
    }
    quantityInfo.textContent = `Quantity: ${quantity}`
    // updateTotal()
})