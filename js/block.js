// document.addEventListener('DOMContentLoaded', () => {
// const blocks = document.querySelector('.block');

//         if (block) {
//         block.addEventListener('mouseover', () => {
//             block.classList.add('block--hover');
//         });

//         block.addEventListener('mouseout', () => {
//             block.classList.remove('block--hover');
//         });
//         } else {
//             console.error('Element with class "block" not found.');
//         }
//     });


    //修正版
    document.addEventListener('DOMContentLoaded', () => {
        const blocks = document.querySelectorAll('.block');
    
        blocks.forEach(block => {
            block.addEventListener('mouseover', () => {
                block.classList.add('block--hover');
            });
    
            block.addEventListener('mouseout', () => {
                block.classList.remove('block--hover');
            });
        });
    });
    