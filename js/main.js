            // PreLoader
            var myVar;

            function myFunction() {
                myVar = setTimeout(showPage, 4000);
            }
    
            function showPage() {
                document.getElementById("loader").style.display = "none";
                document.getElementById("SLoader").style.display = "none";
                document.getElementById("myLoader").style.display = "block";
            }
            // end PreLoader
(function($) {
    "use strict";



    $(document).ready(function() {
     
        $(document).ready(function() {
            "use strict";

    
            $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
            $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
            $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">&nbsp;</a>");
            $(".menu > ul > li").hover(function(e) {
              if ($(window).width() > 943) {
                $(this).children("ul").stop(true, false).fadeToggle(150);
                e.preventDefault();
              }
            });
            $(".menu > ul > li").click(function() {
              if ($(window).width() <= 943) {
                $(this).children("ul").fadeToggle(150);
              }
            });
            $(".menu-mobile").click(function(e) {
              $(".menu > ul").toggleClass('show-on-mobile');
              e.preventDefault();
            });
          });
          $(window).resize(function() {
            $(".menu > ul > li").children("ul").hide();
            $(".menu > ul").removeClass('show-on-mobile');
          });
        //   end nav


        var swiper = new Swiper('.swiper-container', {
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        $('.electronics').click(function() {
            $('#cat-container').toggle();
        })

        $('.electronics').blur(function() {
            $('#cat-container').hide();
        })


        // cat3 owl
        $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            })
            /// end cat3
    });

    // Events carousel (uses the Owl Carousel library)
    $(".customer-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });


    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        autoplayTimeout: 6000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    });
    jQuery(document).ready(function($) {

        $('.countdown').each(function() {
            $(this).countdown({
                until: new Date($(this).attr('data-date'))
            });
        });

    });




    const popup = document.querySelector(".popup");
    const closePopup = document.querySelector(".popup__close");

    if (popup) {
        closePopup.addEventListener("click", () => {
            popup.classList.add("hide__popup");
        });

        window.addEventListener("load", () => {
            setTimeout(() => {
                popup.classList.remove("hide__popup");
            }, 500);
        });
    }


    $(document).ready(function() {
        'use strict';

    });





})(jQuery);