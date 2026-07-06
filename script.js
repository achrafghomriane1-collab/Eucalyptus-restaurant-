function changeQty(id, delta) {
    let span = document.getElementById('qty-' + id);
    let currentQty = parseInt(span.innerText);
    let newQty = currentQty + delta;
    if (newQty < 0) newQty = 0;
    span.innerText = newQty;
}
