(function() {
  "use strict"; // Start of use strict

  var scrollToTop = document.querySelector('.scroll-to-top');
  
  if (scrollToTop) {
    
    // Scroll to top button appear
    window.addEventListener('scroll', function() {
      var scrollDistance = window.pageYOffset;

      if (scrollDistance > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    });
  }

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {

    var navbarCollapse = mainNav.querySelector('.navbar-collapse');
    
    if (navbarCollapse) {
      
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false
      });
    
      var navbarItems = navbarCollapse.querySelectorAll('a');
      
      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener('click', function (event) {
          collapse.hide();
          
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function() {

      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
   
    collapseNavbar();
   
    document.addEventListener("scroll", collapseNavbar);
  }

})(); 

$("#myButton").click(function() {
  $(".shadow").fadeIn(500);
  $("#myForm").fadeIn(500);
});
$("#closeForm").click(function() {
  $(".shadow").fadeOut(500);
  $("#myForm").fadeOut(500);
});
var items = document.querySelectorAll('.item');


  $('#filterBtn').on('click', function() {
    var category = $("#filterCriteria").val();
    
    $('.item h6').each(function() {
      if (category === 'All' || $(this).text() === category) {
        $(this).parent().show();
       
      } else {
        $(this).parent().hide();
       
      }
    });
  });
$('.tog').on("click", function(){
  $("#search-field *").hide();
});

