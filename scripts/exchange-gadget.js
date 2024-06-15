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



// _________________________________________________________________________________________






//Yahoo Finance APIを使用、実際には適切なAPIプロバイダを選ぶ（例、Alpha VantageやIEX Cloudなど）
document.addEventListener("DOMContentLoaded", function() {
    const symbols = ["AAPL", "GOOGL", "AMZN"];
    const apiKey = "https://finance.yahoo.co.jp/quote/4689.T/history"; // ここにAPIキーを入力
    const url = `https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=${symbols.join(",")}`;

    fetch(url, {
        method: "GET",
        headers: {
            "x-api-key": apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const quotes = data.quoteResponse.result;
        quotes.forEach(quote => {
            const elementId = quote.symbol.toLowerCase();
            const price = quote.regularMarketPrice;
            document.getElementById(elementId).innerText = price;
        });
    })
    .catch(error => {
        console.error("Error fetching stock prices:", error);
    });
});




// ________________________________________________________________________\

// exchange-gadget.js

async function fetchStockPrices() {
    try {
        const response = await fetch('https://example.com/stock-api');
        const data = await response.json();

        if (!data || !data.result) {
            throw new Error('Invalid data format');
        }

        const stockPrices = data.result;

        // データをログに出力して確認
        console.log(stockPrices);

        // 必要な操作を実行
        updateStockPrices(stockPrices);
    } catch (error) {
        console.error('Error fetching stock prices:', error.message);
    }
}

function updateStockPrices(prices) {
    // ここに株価更新の処理を記述
    document.getElementById('usd-jpy').textContent = prices.usdJpy;
    document.getElementById('eur-jpy').textContent = prices.eurJpy;
    document.getElementById('gbp-jpy').textContent = prices.gbpJpy;
}

// 実行
fetchStockPrices();
