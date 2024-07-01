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
    // blockをゆらす
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
    








    // // 四つに分裂するための。
    // document.addEventListener('DOMContentLoaded', () => {
    //     const blocks = document.querySelectorAll('.block');
    
    //     blocks.forEach(block => {
    //         const subBlocks = block.querySelectorAll('.sub-block');
            
    //         block.addEventListener('mouseover', () => {
    //             block.classList.add('block--hover');
    //             subBlocks.forEach(subBlock => {
    //                 subBlock.classList.add('sub-block--active');
    //             });
    //         });
    
    //         block.addEventListener('mouseout', () => {
    //             block.classList.remove('block--hover');
    //             subBlocks.forEach(subBlock => {
    //                 subBlock.classList.remove('sub-block--active');
    //             });
    //         });
    //     });
    // });
    




    // 分裂修正　上に表示
    document.addEventListener('DOMContentLoaded', () => {
        const blocks = document.querySelectorAll('.block-Vue');
    
        blocks.forEach(block => {
            const popupContainer = block.querySelector('.popup-container');
            let timeout;
    
            block.addEventListener('mouseover', () => {
                clearTimeout(timeout);
                block.classList.add('block-Vue--hover');
                popupContainer.classList.add('active');
            });
    
            block.addEventListener('mouseout', () => {
                timeout = setTimeout(() => {
                    popupContainer.classList.remove('active');
                    block.classList.remove('block-Vue--hover');
                    // 10秒後に非表示にする
                // /}, 10000);
                }, 3000); // 10秒後に非表示にする
            });
        });
    });
    