document.addEventListener('DOMContentLoaded', function() {
    // 為替レートのダミーデータ
    var exchangeRates = {
        'usd-jpy': '110.25',
        'eur-jpy': '130.50',
        'gbp-jpy': '150.75'
    };

    // 為替レートの表示
    document.getElementById('usd-jpy').textContent = exchangeRates['usd-jpy'];
    document.getElementById('eur-jpy').textContent = exchangeRates['eur-jpy'];
    document.getElementById('gbp-jpy').textContent = exchangeRates['gbp-jpy'];
});
