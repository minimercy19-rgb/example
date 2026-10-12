/* click events: clicking an "Add to Cart" button triggers  function that updates the cart contents
change events: adjusts the quantity of an item in the cart dynamically and updates the total price
submit events: submitting a checkout form validates user input and processes the order
 */

// Event Listener: Add to cart button
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) =>{
        const item = event.target.dataset.item;//get item information from the button data
        console.log(`Adding ${item} to cart.`);
        updateCart(item);//handles the cart update
    });
});

// Event Listener: Change Quantity
document.querySelector("#cart").addEventListener("change", (event) => {
    if (event.target.classList.contains("item-quantity")){
        const itemId = event.target.dataset.itemId;
        const newQuantity = event.target.value;
        console.log(`Updating quantity of item ${itemId} to ${newQuantity}.`);
        updateTotalPrice(); //recalculates total
    }
});

// Event Listener: Submit checkout form
document.querySelector("#checkout-form").addEventListener("submit", (event) => {
    event.preventDefault();//prevents default form submittion behavior
    console.log("Validating checkout form...");
    if (validateForm()){
        processOrder();//function to finalize order
        console.log("Order successfully processed.");
    } else {
        console.log("Form validation failed! Please correct errors.");
    }
});