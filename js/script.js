
// header opacity
(function() {
   $(window).scroll(function() {
     var bgop;
     bgop = $(window).scrollTop() / 180;
     return $(".header-overlay").css("opacity", bgop);
     });
   }).call(this);

// header blur
   $(window).scroll(function(e){
     parallax();
   });

   function parallax() {
     var scrollPosition = $(window).scrollTop();
     $('.banner').css('margin-top', (0 - (scrollPosition * .8)) + 'px');
   }

      $('header').css({ 'height': $(window).height() });
      $(window).on('resize', function() {

           $('header').css({ 'height': $(window).height() });
           $('body').css({ 'width': $(window).width() })
      });


//smooth scroll
   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });

	});


//cursor
  $("html").niceScroll({
  cursorcolor:"#ed0000", 
  cursorwidth: "8", 
  cursorborder: ""
});





// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 