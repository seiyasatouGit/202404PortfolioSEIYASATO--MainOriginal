// const swiper = new Swiper( ".swiper", {
   


    // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: ".roombox01 .roombox02  .roombox03",

    
    // },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: "BTN-RorList",
    //   prevEl: ".BTN-RorList ",
    // },
  
    // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });



  //swiperやり直し

// var Swiper = new Swiper('.swiper-container', {

//   loop: true,

//   pagination: {

//     el: '.swiper-pagination',

//   },
//   navigation: {

//     nextEl: '.swiper-button-next',

//     prevEl: '.swiper-button-prev',

//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// })

var mySwiper = new Swiper('.swiper-container', {
	slidesPerColumnFill: 'row',
	slidesPerColumn: 2,
	slidesPerView: 3,
	slidesPerGroup: 6,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});


// <!-- Initialize Swiper -->
  // <script>
    // var swiper = new Swiper(".mySwiper", {
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },
    // });
  // </script>






//   <!-- Initialize Swiper -->
//   <script>
    // var swiper = new Swiper(".mySwiper", {
        
    //   pagination: {
    //     el: ".roombox01 .roombox02",
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     },
    //   },
    // });
//   </script>