








// カレンダー
// 生年月日のフォーマットをYYYY-MM-DDに設定
var today = new Date().toISOString().split('T')[0];
document.getElementById('dateInput').setAttribute('max', today);

// カレンダーの作成
var calendarContainer = document.getElementById('calendar');
var calendarHTML = '<table>';
for (var i = 0; i < 6; i++) {
    calendarHTML += '<tr>';
    for (var j = 0; j < 7; j++) {
        calendarHTML += '<td>' + ((i * 7) + j + 1) + '</td>';
    }
    calendarHTML += '</tr>';
}
calendarHTML += '</table>';
calendarContainer.innerHTML = calendarHTML;


// カレンダーをページに追加
calendarContainer.innerHTML = calendarHTML;

// 今日の日付を表示する
document.getElementById('dateInput').value = today;












// function updateClock() {
//     var now = new Date();
//     var hours = now.getHours();
//     var minutes = now.getMinutes();
//     var seconds = now.getSeconds();
    
    // 時刻のフォーマットを調整する（例： "9:05:00"）
    // var timeString = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  
    // ページ上の "clockDisplay" というIDを持つ要素に時間を表示する
    // document.getElementById('clockDisplay').innerText = timeString;
  // }
  
  // 1秒ごとに時計を更新する
  // setInterval(updateClock, 1000);
  
  // 初回の更新を行う
  // updateClock();
  



  function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    var timeString = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  
    document.getElementById('clockDisplay').innerText = timeString;
  }

  setInterval(updateClock, 1000);
  updateClock();






// 天気情報の取得
function getWeather() {
  // ここに天気情報を取得するAPIへのリクエストを実装する
  // 以下はダミーのデータ
  var weatherData = {
      temperature: "25°C",
      condition: "晴れ"
  };

  // 取得した天気情報を表示
  document.getElementById('temperature').textContent = weatherData.temperature;
  document.getElementById('condition').textContent = weatherData.condition;
}

// ページが読み込まれた時に天気情報を取得
window.onload = getWeather;
