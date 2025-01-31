// Example product data (you can replace this with data from an API or JSON file)
const products = [
    {
        id: 1,
        name: "Nike Air Max",
        price: 120,
        image: "images/shoe1.jpg",
        description: "A stylish and comfortable pair of Nike Air Max shoes."
    },
    {
        id: 2,
        name: "Adidas Ultraboost",
        price: 140,
        image: "images/shoe2.jpg",
        description: "The perfect balance of comfort and performance."
    },
    {
        id: 3,
        name: "Puma RS-X",
        price: 100,
        image: "images/shoe3.jpg",
        description: "A bold and stylish shoe from Puma."
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayProducts() {
    const productSection = document.getElementById('products');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productSection.appendChild(productCard);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your cart!`);
}

// Call displayProducts when the page loads
window.onload = displayProducts;
