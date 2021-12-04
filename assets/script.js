// access the button with id of 'quantity-up'
const plusBtn = document.querySelector('#quantity-up')
// access the button with id of 'quantity-down'
const minusBtn = document.querySelector('#quantity-down')
// access the div with class of 'total-quantity'
const productQuantity = document.querySelector('.total-quantity')

// set quantity initially to 1
let quantity = 1

//  add event listener to the + button
plusBtn.addEventListener('click', function() {
    // add one to quantity when button is clicked
    quantity++
    // change text to be Quantity: # when button is clicked. We are using a template literal here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    productQuantity.textContent = `Quantity: ${quantity}`
})

// add event listener to the - button
minusBtn.addEventListener('click', function(){
    // console.log('minus clicked')
    // Conditional statement: if quantity is greater than zero, subtract one from quantity
    if (quantity > 0) {
        quantity--
    } 
    // quantity--
    productQuantity.textContent = `Quantity: ${quantity}`
})