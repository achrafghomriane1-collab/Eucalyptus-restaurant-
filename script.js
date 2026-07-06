let cart = {};
function changeQty(name, price, delta) {
    if (!cart[name]) cart[name] = { qty: 0, price: price };
    cart[name].qty += delta;
    if (cart[name].qty < 0) cart[name].qty = 0;
    document.getElementById('qty-' + name.replace(/\s+/g, '-')).innerText = cart[name].qty;
}
