// function fetchData() {
//     $.get("/data", function(data) {
//         var html = "<h1>株価指数データ</h1><table border='1'>";
//         html += "<tr><th>指数</th><th>現在値</th><th>変動</th></tr>";
//         $.each(data, function(index, value) {
//             html += "<tr><td>" + index + "</td><td>" + value[0].toFixed(2) + "</td><td>" + value[1].toFixed(2) + "</td></tr>";
//         });
//         html += "</table>";
//         $("#indices").html(html);
//     });
// }


function fetchData() {
    // Ajaxリクエストを使ってデータを取得する
    // $.get("http://localhost:5000/data", function(data) {
    $.get("data.html", function(data) {
        // 取得したデータを表示するためのHTMLを構築する
        var html = "<h1>株価指数データ</h1><table border='1'>";
        html += "<tr><th>指数</th><th>現在値</th><th>変動</th></tr>";
        
        // データの各要素に対して繰り返し処理を行う
        $.each(data, function(index, value) {
            // テーブルの行を追加する
            html += "<tr><td>" + index + "</td><td>" + value[0].toFixed(2) + "</td><td>" + value[1].toFixed(2) + "</td></tr>";
        });
        
        // テーブルのHTMLを完了させる
        html += "</table>";
        
        // HTMLを#indices要素に挿入することで表示する
        $("#indices").html(html);
    });
}

// ページのロードが完了したら実行される処理
$(document).ready(function() {
    // 初回のデータ取得を行う
    fetchData();
    
    // 1秒ごとにデータを更新するためのタイマーをセットする
    setInterval(fetchData, 1000);
});
