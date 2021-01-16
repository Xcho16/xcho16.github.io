

$(document).ready(function()
{
    /* Script for animated sticky nav bar - START */
     windowCheck = function() 
     {
         //For IE 8, IE 8--, IE 9, IE 9++ and modern browsers    
         var scrollY = window.scrollY > 120 || document.documentElement.scrollTop > 120 || window.pageYOffset > 120, /* => Increase and decrease value (120) according to height of 'header' above 'nav' bar. */
             screenCheck = window.matchMedia("(min-width: 881px)").matches;

         if (screenCheck)
         {
              if (scrollY) 
              {
                $("nav > .row-sub-div").css({
                    'position':'fixed',
                    'margin':'auto'
                });
                $("#desktop-nav-links").addClass("slideDown");
              } 
              else 
              {
                $("nav > .row-sub-div").css('position', 'relative');
                $("#desktop-nav-links").removeClass("slideDown");
              } 
         }
         else 
              $("nav > .row-sub-div").css('position', 'fixed');
     }
     window.onscroll = windowCheck;
     window.onresize = windowCheck;
     /* Script for animated sticky Nav bar - END */


     /* Mobile Nav Menu Animation - START */
     $("#mobile-nav-button").click(function()
     {
         if ($("#mobile-side-nav-search-container").css('opacity') == '0')
         {
             openSideNav();
         }
         else
         {
             closeSideNav();
         }
     });
    
    $("#mobile-menu-transparent-bg, \
        li.mobile-side-nav-link-container:nth-child(2),\
        li.mobile-side-nav-link-container:nth-child(3),\
        li.mobile-side-nav-link-container:nth-child(4),\
        li.mobile-side-nav-link-container:nth-child(5),\
        li.mobile-side-nav-link-container:nth-child(6),\
        li.mobile-side-nav-link-container:nth-child(7),\
        li.mobile-side-nav-link-container:nth-child(8)").click(function()
    {
        if ($("#mobile-side-nav-search-container").css('opacity') == '1') 
        {
            closeSideNav();
        }
    });
    
    function openSideNav() {
          $("#mobile-side-nav-menu").css('z-index', '8').animate({top: "0"}, 1100);
          $("#mobile-menu-transparent-bg").fadeIn(300);
        $(".mobile-nav-button-stroke:nth-child(1)").removeClass('rotateBackUp').addClass('rotate45deg');
        $(".mobile-nav-button-stroke:nth-child(2)").removeClass('showNavStroke').addClass('hideNavStroke');
        $(".mobile-nav-button-stroke:nth-child(3)").removeClass('rotateBackDown').addClass('rotate315deg');
        $("#mobile-side-nav-donate, #mobile-side-nav-search-container").delay(400).animate({opacity: 1}, 900)
        $("li.mobile-side-nav-link-container:nth-child(2)").delay(600).animate({'margin-left':'0', opacity: 1}, 700);
          $("li.mobile-side-nav-link-container:nth-child(3)").delay(850).animate({'margin-left':'0', opacity: 1}, 700);
          $("li.mobile-side-nav-link-container:nth-child(4)").delay(1100).animate({'margin-left':'0', opacity: 1}, 700);
          $("li.mobile-side-nav-link-container:nth-child(5)").delay(1350).animate({'margin-left':'0', opacity: 1}, 700);
          $("li.mobile-side-nav-link-container:nth-child(6)").delay(1600).animate({'margin-left':'0', opacity: 1}, 700);
          $("li.mobile-side-nav-link-container:nth-child(7)").delay(1850).animate({'margin-left':'0', opacity: 1}, 700);
          
     }
         
     function closeSideNav() {
          $("#mobile-side-nav-menu").delay(900).animate({top: '-100%'}, 900);
          $("#mobile-menu-transparent-bg").delay(1000).fadeOut(300);
          $(".mobile-nav-button-stroke:nth-child(1)").removeClass('rotate45deg').addClass('rotateBackUp');
          $(".mobile-nav-button-stroke:nth-child(2)").removeClass('hideNavStroke').addClass('showNavStroke');
          $(".mobile-nav-button-stroke:nth-child(3)").removeClass('rotate315deg').addClass('rotateBackDown');
          $("#mobile-side-nav-donate, #mobile-side-nav-search-container").delay(100).animate({opacity: 0}, 700)
          $("li.mobile-side-nav-link-container:nth-child(2)").delay(500).animate({'margin-left':'-100%', opacity: 0}, 400);
          $("li.mobile-side-nav-link-container:nth-child(3)").delay(400).animate({'margin-left':'-100%', opacity: 0}, 400);
          $("li.mobile-side-nav-link-container:nth-child(4)").delay(300).animate({'margin-left':'-100%', opacity: 0}, 400);
          $("li.mobile-side-nav-link-container:nth-child(5)").delay(200).animate({'margin-left':'-100%', opacity: 0}, 400);
          $("li.mobile-side-nav-link-container:nth-child(6)").delay(100).animate({'margin-left':'-100%', opacity: 0}, 400);
          $("li.mobile-side-nav-link-container:nth-child(7)").animate({'margin-left':'-400px', opacity: 0},400);
          
     }
     /* Mobile Nav Menu Animation - END */
 });

//Login Conditions