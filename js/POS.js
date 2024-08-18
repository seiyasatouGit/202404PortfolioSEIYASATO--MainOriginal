// app.js
async function loadInventory() {
    const response = await fetch('/inventory');
    const data = await response.json();
    document.getElementById('inventory').innerText = JSON.stringify(data, null, 2);
}

async function sellItem() {
    const itemId = document.getElementById('item_id').value;
    const response = await fetch('/sell', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: itemId })
    });
    const result = await response.json();
    alert(result.message);
    loadInventory();
}

window.onload = loadInventory;











document.getElementById('checkout-button').addEventListener('click', function() {
    alert('お会計が完了しました。');
});

// 商品検索フィルター
document.getElementById('search-bar').addEventListener('keyup', function() {
    let filter = this.value.toUpperCase();
    let rows = document.querySelectorAll('#product-table tbody tr');
    rows.forEach(row => {
        let productName = row.querySelector('td:first-child').textContent.toUpperCase();
        row.style.display = productName.indexOf(filter) > -1 ? '' : 'none';
    });
});
