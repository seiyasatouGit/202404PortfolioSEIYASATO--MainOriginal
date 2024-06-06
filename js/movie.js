document.addEventListener('DOMContentLoaded', function() {
    // 特別な演出をトップセクションに適用する
    const topSection = document.querySelector('.top-section');
    topSection.classList.add('special-effect');
});







// document.addEventListener('DOMContentLoaded', function() {
//     // 時間帯に応じて背景とトップセクションに特別なクラスを追加する
//     const hours = new Date().getHours();
//     const bodyClassList = document.body.classList;
//     const topSection = document.querySelector('.top-section');

//     if (hours >= 6 && hours < 12) {
//         bodyClassList.add('background--morning');
//         topSection.classList.add('morning-special-effect');
//     } else if (hours >= 12 && hours < 18) {
//         bodyClassList.add('background--afternoon');
//         topSection.classList.add('afternoon-special-effect');
//     } else {
//         bodyClassList.add('background--night');
//         topSection.classList.add('night-special-effect');
//     }
// });




// console.log確認
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded event triggered');
    
    const hours = new Date().getHours();
    console.log('Current hour:', hours);
    
    // const bodyClassList = document.body.classList;
    const topSection = document.querySelector('.mv-container__top-section');
    
    if (hours >= 6 && hours < 12) {
        // bodyClassList.add('background--morning');
        topSection.classList.add('background--morning', 'special-effect');
        console.log('Morning classes added');
    } else if (hours >= 12 && hours < 18) {
        // bodyClassList.add('background--afternoon');
        topSection.classList.add('background--afternoon', 'special-effect');
        console.log('Afternoon classes added');
    } else {
        // bodyClassList.add('background--night');
        topSection.classList.add('background--night','special-effect');
        console.log('Night classes added');
    }
});
