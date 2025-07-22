const products = [
  { id: 1, title: 'Turbo Tee Red', price: 35, image: '/assets/Turbo Tee Red.jpg' },
  { id: 2, title: 'Speed Black Tee', price: 38, image: '/assets/Speed Black Tee.jpg' },
  { id: 3, title: 'Checkered Flag Tee', price: 40, image: '/assets/Checkered Flag Tee.jpg' },
];

const grid = document.getElementById('product-grid');
const sortSelect = document.getElementById('sort-select');

function renderProducts(productList) {
  grid.innerHTML = '';
  productList.forEach(product => {
    grid.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}" />
        <div class="product-title">${product.title}</div>
        <div class="product-price">$${product.price}</div>
        <button class="add-cart-btn" onclick="addToCart(${product.id})">Add to Cart 🛒</button>
      </div>
    `;
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  // ✅ Redirect to cart page after adding item
  window.location.href = '../cart.html';
}

sortSelect.addEventListener('change', () => {
  const value = sortSelect.value;
  let sorted = [...products];
  if (value === 'low') sorted.sort((a, b) => a.price - b.price);
  else if (value === 'high') sorted.sort((a, b) => b.price - a.price);
  renderProducts(sorted);
});

renderProducts(products);
