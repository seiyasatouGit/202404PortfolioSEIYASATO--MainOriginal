// 現在の日付を取得
const currentDate = new Date();

// 現在の日付に関連する情報を表すオブジェクトを作成
const todayData = {
    day: currentDate.getDate(), // 日付
    temperature: 30, // 仮の気温
    weather: '晴', // 仮の天気
    // 1週間の数字を追加
    weeklyForecast: [
        { day: 1, temperature: 28, weather: '晴れ' },
        { day: 2, temperature: 29, weather: '晴れ' },
        { day: 3, temperature: 27, weather: '曇り' },
        { day: 4, temperature: 26, weather: '雨' },
        { day: 5, temperature: 25, weather: '晴れ' },
        { day: 6, temperature: 26, weather: '晴れ' },
        { day: 7, temperature: 27, weather: '曇り' }
    ]
};

console.log(todayData);







// 予測結果のデータ
const predictionData = [
    // { day: 11, temperature: 42 },
    // { day: 12, temperature: 43 },
    // { day: 13, temperature: 41 },
    // { day: 14, temperature: 40 },
    // { day: 15, temperature: 39 }

    { day: 6, temperature: 15, weather: '晴' },
    { day: 11, temperature: 42, weather: '晴' },
    { day: 12, temperature: 43, weather: '曇' },
    { day: 13, temperature: 41, weather: '雨' },
    { day: 14, temperature: 40, weather: '晴' },
    { day: 15, temperature: 39, weather: '曇' }
];

// SVGグラフに描画する関数
function drawPrediction(data) {
    // const svg = document.querySelector('.chart');
    // const width = svg.getAttribute('width');
    // const height = svg.getAttribute('height');
    const width = 180;
    const height = 180;
    const margin = 20;
    const xScale = (width - 2 * margin) /(data.length - 1); // スケーリングを調整
    const yScale = (height - 2 * margin) / Math.max(...data.map(d => d.temperature));

    // const points = data.map(d => `${margin + d.day * xScale},${height - margin - d.temperature * yScale}`);
    // const line = points.reduce((acc, point, i) => i === 0 ? `M${point}` : `${acc} L${point}`, '');
    const points = data.map(d => `${margin + (d.day - 11) * xScale},${height - margin - d.temperature * yScale}`);
    const line = points.reduce((acc, point, i) => i === 0 ? `M${point}` : `${acc} L${point}`, '');

    svg.innerHTML = `<polyline points="${line}" class="predicted-line"/>`;

    data.forEach(d => {
        // svg.innerHTML += `<circle cx="${margin + d.day * xScale}" cy="${height - margin - d.temperature * yScale}" r="4" class="data-point"/>`;
        const cx = margin + (d.day - 11) * xScale;
        const cy = height - margin - d.temperature * yScale;
        svg.innerHTML += `<circle cx="${cx}" cy="${cy}" r="4" class="data-point"/>`;
        svg.innerHTML += `<text x="${cx}" y="${cy - 5}" class="label">${d.temperature}°C</text>`;
        svg.innerHTML += `<text x="${cx}" y="${cy - 15}" class="label">${d.weather}</text>`;
    });
}

// 予測結果を描画
drawPrediction(predictionData);