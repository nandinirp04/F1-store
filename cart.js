function loadCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const subtotalElement = document.getElementById('subtotal');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartItemsContainer.innerHTML = '';
  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const itemHTML = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.title}" />
        <div class="item-details">
          <div class="item-title">${item.title}</div>
          <div class="item-price">Price: $${item.price}</div>
          <div class="quantity-control">
            <button onclick="updateQuantity(${index}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="updateQuantity(${index}, 1)">+</button>
          </div>
          <div class="item-total">Total: $${itemTotal.toFixed(2)}</div>
          <div class="cart-actions">
            <button class="order-btn" onclick="orderNow(${index})">Order Now</button>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
          </div>
        </div>
      </div>
    `;

    cartItemsContainer.innerHTML += itemHTML;
  });

  subtotalElement.textContent = subtotal.toFixed(2);
}

function updateQuantity(index, change) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (!cart[index]) return;

  cart[index].quantity += change;
  if (cart[index].quantity < 1) cart.splice(index, 1);

  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (!cart[index]) return;

  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

function orderNow(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const item = cart[index];
  alert(`Thank you! Your order for "${item.title}" has been placed.`);
  // Optionally remove item after ordering
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

document.getElementById('checkout-btn').addEventListener('click', () => {
  alert("Checkout not implemented. This is just a UI placeholder.");
});

loadCart();
