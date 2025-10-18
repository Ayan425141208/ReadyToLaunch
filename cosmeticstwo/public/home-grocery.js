document.addEventListener('click', (e) => {
const btn = e.target.closest('.buy-btn');
if (!btn) return;
const name = btn.getAttribute('data-product');
const price = btn.getAttribute('data-price');
// Replace this with your checkout integration
alert(`Added to cart:\n${name} — $${price}`);
});