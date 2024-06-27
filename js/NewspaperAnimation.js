const newspaper = document.getElementById('newspaper');

newspaper.addEventListener('click', () => {
    // 新聞に揺れるクラスを追加
    newspaper.classList.add('mascot-newspaper--shake');
    
    // 揺れ動作が終わるまで待つ
    setTimeout(() => {
        // 揺れ動作が終わったらクラスを削除
        newspaper.classList.remove('mascot-newspaper--shake');
        
        // 新聞を開閉するクラスをトグル
        newspaper.classList.toggle('mascot-newspaper--open');
    }, 300); // 揺れ動作のアニメーション時間と同じに設定
});
