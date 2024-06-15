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



// 幅を修正後
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.portfolio__container');
    const prevButton = document.querySelector('.portfolio__button--prev');
    const nextButton = document.querySelector('.portfolio__button--next');
    const workItems = document.querySelectorAll('.portfolio__work');

    let itemWidth = workItems[0].offsetWidth + parseInt(window.getComputedStyle(workItems[0]).marginRight);

    nextButton.addEventListener('click', function () {
        container.scrollBy({ left: itemWidth, behavior: 'smooth' });
    });

    prevButton.addEventListener('click', function () {
        container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    });
});
