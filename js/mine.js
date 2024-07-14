$(document).ready(function() {
        var boxWidth = $('.side-nav-bar').outerWidth();
        console.log(bo);
    
        function openNav() {
            $('.side-nav-bar').animate({left: 0}, 500);
            $('.nav-header .open-close-icon').addClass("fa-x");
            $('.nav-header .open-close-icon').removeClass("fa-align-justify");
        }
    
        function closeNav() {
            $('.side-nav-bar').animate({left: -boxWidth}, 500);
            $('.nav-header .open-close-icon').addClass("fa-align-justify");
            $('.nav-header .open-close-icon').removeClass("fa-x");
        }
    
        $(".side-nav-bar i.open-close-icon").click(function() {
            if ($('.side-nav-bar').css('left') === '0px') {
                closeNav();
            } else {
                openNav();
            }
        });
    });
    