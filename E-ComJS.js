// Add this JavaScript code to your page or an external JavaScript file
document.getElementById("searchButton").addEventListener("click", function () {
    // Get the search input value
    const searchValue = document.getElementById("searchBar").value;

    // Perform a search based on the searchValue
    // You can implement your search logic here and navigate to the search results page
    // For this example, we're just showing an alert
    if (searchValue.trim() !== "") {
        alert("Performing a search for: " + searchValue);
    }
});



let shoppingCart = [];


function addToCart(productName, productPrice) {
    // Check if the product is already in the cart
    for (let item of shoppingCart) {
        if (item.name === productName) {
            item.quantity++;
            updateCartDisplay();
            return; // Exit the function
        }
    }

    // If the product is not in the cart, add it
    const newItem = {
        name: productName,
        price: productPrice,
        quantity: 1,
    };
    shoppingCart.push(newItem);
    updateCartDisplay();
}






function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear the current cart display
    cartItems.innerHTML = '';
    
    let total = 0;

    // Iterate through items in the shopping cart
    for (let item of shoppingCart) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
        cartItems.appendChild(listItem);
        total += item.price * item.quantity;
    }

    // Update the total cost
    cartTotal.textContent = total;
}





function toggleCart() {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
}
