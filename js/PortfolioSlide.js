// document.addEventListener('DOMContentLoaded', function () {
//     const container = document.querySelector('.portfolio__container');
//     const prevButton = document.querySelector('.portfolio__button--prev');
//     const nextButton = document.querySelector('.portfolio__button--next');

//     let scrollAmount = 0;

//     nextButton.addEventListener('click', function () {
//         container.scrollBy({ left: 300, behavior: 'smooth' });
//     });

//     prevButton.addEventListener('click', function () {
//         container.scrollBy({ left: -300, behavior: 'smooth' });
//     });
// });



// // 幅を修正後
// document.addEventListener('DOMContentLoaded', function () {
//     const container = document.querySelector('.portfolio__container');
//     const prevButton = document.querySelector('.portfolio__button--prev');
//     const nextButton = document.querySelector('.portfolio__button--next');
//     const workItems = document.querySelectorAll('.portfolio__work');

//     let itemWidth = workItems[0].offsetWidth + parseInt(window.getComputedStyle(workItems[0]).marginRight);

//     nextButton.addEventListener('click', function () {
//         container.scrollBy({ left: itemWidth, behavior: 'smooth' });
//     });

//     prevButton.addEventListener('click', function () {
//         container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
//     });
// });




document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.portfolio__container');
    const prevButton = document.querySelector('.portfolio__button--prev');
    const nextButton = document.querySelector('.portfolio__button--next');
    const workItems = document.querySelectorAll('.portfolio__work');

    if (workItems.length > 0) {
        let itemWidth = workItems[0].offsetWidth + parseInt(window.getComputedStyle(workItems[0]).marginRight);

        console.log('Item width:', itemWidth); // デバッグ用ログ

        nextButton.addEventListener('click', function () {
            console.log('Next button clicked'); // デバッグ用ログ
            container.scrollBy({ left: itemWidth, behavior: 'smooth' });
        });

        prevButton.addEventListener('click', function () {
            console.log('Prev button clicked'); // デバッグ用ログ
            container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
        });
    } else {
        console.error('No portfolio work items found');
    }
});
