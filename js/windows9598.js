document.querySelector('.window__title-bar').addEventListener('mousedown', function (e) {
    const windowElement = document.querySelector('.window');
    let offsetX = e.clientX - windowElement.offsetLeft;
    let offsetY = e.clientY - windowElement.offsetTop;

    function moveAt(e) {
        windowElement.style.left = e.clientX - offsetX + 'px';
        windowElement.style.top = e.clientY - offsetY + 'px';
    }

    document.addEventListener('mousemove', moveAt);

    document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', moveAt);
    }, { once: true });
});







document.addEventListener('DOMContentLoaded', function() {

    const startButton = document.querySelector('.taskbar__start-button');
    const startMenu = document.getElementById('startMenu');

    startButton.addEventListener('click', function() {
        // メニューの表示・非表示を切り替え
        if (startMenu.style.display === 'none' || startMenu.style.display === '') {
            startMenu.style.display = 'block';
        } else {
            startMenu.style.display = 'none';
        }

         // イベントの伝播を停止
        // event.stopPropagation();
    });

    // ページの他の場所をクリックしたらスタートメニューを閉じる
    document.addEventListener('click', function(event) {
        if (!startButton.contains(event.target) && !startMenu.contains(event.target)) {
            startMenu.style.display = 'none';
        }
    });

        // スタートメニュー内をクリックしても閉じないようにする
        startMenu.addEventListener('click', function(event) {
            event.stopPropagation();
        });

        console.log(startButton);  // nullでないことを確認
console.log(startMenu);    // nullでないことを確認
console.log(startMenu.style.display);  // ブロックかどうか確認












document.querySelector('.google-icon img').addEventListener('click', function() {
    window.location.href = 'https://www.google.com';  // 遷移先のURL
});



});
