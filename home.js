(function () {
  "use strict"; // Start of use strict

  var scrollToTop = document.querySelector(".scroll-to-top");

  if (scrollToTop) {
    // Scroll to top button appear
    window.addEventListener("scroll", function () {
      var scrollDistance = window.pageYOffset;

      if (scrollDistance > 100) {
        scrollToTop.style.display = "block";
      } else {
        scrollToTop.style.display = "none";
      }
    });
  }

  var mainNav = document.querySelector("#mainNav");

  if (mainNav) {
    var navbarCollapse = mainNav.querySelector(".navbar-collapse");

    if (navbarCollapse) {
      var collapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });

      var navbarItems = navbarCollapse.querySelectorAll("a");

      // Closes responsive menu when a scroll trigger link is clicked
      for (var item of navbarItems) {
        item.addEventListener("click", function (event) {
          collapse.hide();
        });
      }
    }

    // Collapse Navbar
    var collapseNavbar = function () {
      var scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;

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

$("#myButton").click(function () {
  $(".shadow").fadeIn(500);
  $("#myForm").fadeIn(500);
});
$("#closeForm").click(function () {
  $(".shadow").fadeOut(500);
  $("#myForm").fadeOut(500);
});
var items = document.querySelectorAll(".item");

$("#filterBtn").on("click", function () {
  let filterEmpty = 1;
  var category = $("#filterCriteria").val();

  $(".item h6").each(function () {
    if (category === "All" || $(this).text() === category) {
      $(this).parent().show();
      filterEmpty = 0;
    } else {
      $(this).parent().hide();
    }
  });
  if(filterEmpty){
    $(".notFound").show();
    $(".notFound").html('No charities match your filter <i class="fa-solid fa-filter"></i>');
  } else {
    $(".notFound").hide();
  }
});
// Hide the search input on mobile screen
// if ($(".navbar-toggler").css("display") === "none") {
//   $("#search-field *").show();
// } else {
//   $("#search-field *").hide();
// }
$(".notFound").hide();

$(".search-input").on("keyup", function () {
  let searchEmpty = 1;
  var input = $(this).val().toLowerCase();
  $(".item h3").each(function () {
    if ($(this).text().toLowerCase().indexOf(input) >= 0) {
      $(this).parent().show();
      searchEmpty = 0;
    } else {
      $(this).parent().hide();
    }
  });
  if(searchEmpty){
    $(".notFound").show();
    $(".notFound").html('No charities match your search <i class="fa fa-search-minus"></i>');
  } else {
    $(".notFound").hide();
  }
});

$("#search-field").submit(function (event) {
  let searchEmpty = 1;
  event.preventDefault();
  $("#search-icon").addClass("fa-beat");
  var inText = $(".search-input").val().toLowerCase();
  $(".item h3").each(function () {
    if ($(this).text().toLowerCase().indexOf(input) >= 0 || input ===  "") {
      $(this).parent().show();
      searchEmpty = 0;
    } else {
      $(this).parent().hide();
    }
  });
  if(searchEmpty){
    $(".notFound").show();
    $(".notFound").html('No charities match your search <i class="fa fa-search-minus"></i>');
  } else {
    $(".notFound").hide();
  }
  setTimeout(function(){$("#search-icon").removeClass("fa-beat");}, 3000);
});
if($(".item").length === 1){
  $(".notFound").show();
  $(".notFound").html('There is no charities at the moment <i class="fa-solid fa-box-open"></i>');
} else {
  $(".notFound").hide();
}