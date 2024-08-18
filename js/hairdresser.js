// scripts.js

// ここにJavaScriptを追加して、インタラクションを強化
// 例：画像スライドショーやタブの切り替えなど






document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.mv-slider');
    const slides = document.querySelectorAll('.mv-slide');
    let currentIndex = 4; // 初期値を最後のスライドに設定
    let interval;

    // スライダーを動かす関数
    function moveSlider() {
        currentIndex = (currentIndex + 1) % slides.length;
        slider.style.transform = `translateX(-${(currentIndex * 100)}%)`;
    }

    // 自動スライドの開始
    function startSlider() {
        interval = setInterval(moveSlider, 5000); // 5秒ごとにスライド
    }

    // 自動スライドの停止
    function stopSlider() {
        clearInterval(interval);
    }

    // スライドをクリックで操作
    document.querySelector('.mv-section').addEventListener('click', () => {
        if (interval) {
            stopSlider();
        } else {
            startSlider();
        }
    });

    // 最初にスライダーを開始
    startSlider();
});

