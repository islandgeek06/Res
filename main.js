$(document).ready(function(){

    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){

        $('#menu-bar').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

    $('.list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let src = $(this).attr('data-src');
        $('.menu .row .image img').attr('src',src);
    });

});

// ----Read Moere
const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});





// ----Swiper
var swiper = new Swiper(".review-slider", {
     spaceBetween: 30,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

     autoplay: {
          delay: 6500,
          disableOnInteraction: false,
    },
     
      breakpoints: {
          0: {
            slidesPerView: 0,
          },
          768: {
            slidesPerView: 2,
          },
        },
    
    loop: true,
    grabCursor: true, 
});