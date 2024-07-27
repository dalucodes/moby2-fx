

var burger = document.getElementById("burger")
var close= document.getElementById("close")
var nav= document.getElementById("burger-nav")
  burger.addEventListener("click",function(){
    close.style.display="flex"
    burger.style.display="none"
    nav.style.display="block"

   
  })
  close.addEventListener("click",function(){
    close.style.display="none"
    burger.style.display="flex"
    nav.style.display="none"
  })
  
  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 1,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
200: {
    slidesPerView: 1,
    spaceBetween: 12
},
500: {
    slidesPerView: 2,
    spaceBetween: 10
},
800: {
    slidesPerView: 3,
    spaceBetween: 25
}
}
});
var drag =document.querySelector('.swiper-scrollbar-drag')
drag.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#1047D7';
});
var blue = document.querySelector('.article')
blue.addEventListener('mouseover',function(){
    drag.style.backgroundColor='#1047D7';
})
document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".sections");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                // entry.target.classList.remove("visible"); // Remove the class if it's no longer intersecting
            }
        });
    }, {
        threshold: 0.3
    });

    boxes.forEach(section => {
        observer.observe(section);
    });
});
// $(document).ready(function () {
//     $('nav .nav-cont').click(function () {
//         // Remove the active class and reset the styles for all nav-cont elements
//         $('nav .nav-cont').removeClass('active').find('a').css({
//             'color': '',
//             // 'border-bottom': ''
//         });
        
//         // Add the active class and apply styles to the clicked element
//         $(this).addClass('active').find('a').css({
//             'color': '#1047d7',
//             // 'border-bottom': '2px solid #1047D7'
//         });
//     });
// });

// $(document).ready(function () {
//     $('nav .nav-cont')
//         .click(function (e) {
//             $('nav .nav-cont ')
//                 .removeClass('active');
//             $(this).addClass('active');
//         });
// });
$(document).ready(function () {
    $('nav .nav-cont').click(function () {
        $('nav .nav-cont').removeClass('active').find('a').css('color', 'black');
        $(this).addClass('active').find('a').css('color', '#1047d7');
    });
});
