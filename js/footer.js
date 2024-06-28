// document.querySelectorAll('.news-link').forEach(link => {
//     link.addEventListener('click', event => {
//         event.preventDefault();
//         const url = event.target.getAttribute('data-url');
//         const column = event.target.closest('.footer__column');

//         // アニメーションを追加
//         column.classList.add('float-down');

//         // アニメーション後にページ遷移
//         setTimeout(() => {
//             window.location.href = url;
//         }, 500); // アニメーションの時間に合わせる
//     });
// });





// document.querySelectorAll('.news-button').forEach(button => {
//     button.addEventListener('click', event => {
//         const url = event.currentTarget.getAttribute('data-url');
//         // const column = event.currentTarget;

//         event.currentTarget.classList.add('active');

//         // アニメーションを追加
//         column.classList.add('float-down');

//         // アニメーション後にページ遷移
//         setTimeout(() => {
//             window.location.href = url;
//         },300); // アニメーションの時間に合わせる
//     });
// });



document.querySelectorAll('.footer__column').forEach(column => {
    column.addEventListener('click', event => {
        const url = event.currentTarget.getAttribute('data-url');
        event.currentTarget.classList.add('active');

        setTimeout(() => {
            window.location.href = url;
        }, 300); // アニメーションの時間に合わせる
    });
});
