const menuData = {
    "PIZZAS": [{ name: "Pizza Margherita", price: 600 }, { name: "Pizza Thon", price: 800 }],
    "POISSONS": [{ name: "Dorade Grillée", price: 2200 }]
};

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

// إنشاء أزرار التصنيفات
const btnContainer = document.getElementById('category-buttons');
for (let cat in menuData) {
    let btn = document.createElement('button');
    btn.innerText = cat;
    btn.onclick = () => {
        const container = document.getElementById('category-items');
        container.innerHTML = menuData[cat].map(item => `
            <div class="item">
                <span>${item.name} (${item.price} DA)</span>
                <button onclick="addToCart('${item.name}', ${item.price})">+</button>
            </div>
        `).join('');
    };
    btnContainer.appendChild(btn);
}

let cart = {};
function addToCart(name, price) {
    cart[name] = cart[name] ? { ...cart[name], qty: cart[name].qty + 1 } : { price, qty: 1 };
    updateCartUI();
}

function updateCartUI() {
    let total = 0;
    const itemsDiv = document.getElementById('cart-items');
    itemsDiv.innerHTML = '';
    for (let name in cart) {
        total += cart[name].price * cart[name].qty;
        itemsDiv.innerHTML += `<div>${name} - ${cart[name].qty}</div>`;
    }
    document.getElementById('total-price').innerText = total;
    document.getElementById('final-total').innerText = total;
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = (modal.style.display === 'none') ? 'block' : 'none';
}

function sendOrder() {
    document.getElementById('confirmation-message').style.display = 'block';
    document.getElementById('send-order-btn').style.display = 'none';
}
