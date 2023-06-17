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
  //NavBar collapse
  var navbarCollapse = mainNav.querySelector(".navbar-collapse");
  if (navbarCollapse) {
    var collapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false,
    });
    var navbarItems = navbarCollapse.querySelectorAll("a");
    for (var item of navbarItems) {
      item.addEventListener("click", function () {
        collapse.hide();
      });
    }
    var searchBtn = document.querySelector("#searchBtn");
    searchBtn.addEventListener("click", function () {
      collapse.hide();
    });
  }

// Navbar Shrink
function collapseNavbar() {
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
}
  collapseNavbar();
  document.addEventListener("scroll", collapseNavbar);
}
// Add charity form appear and disappear
$("#myButton").click(function () {
  $(".shadow").fadeIn(25);
  $("#myForm").fadeIn(400);
});

$("#closeForm").click(function () {
  $(".shadow").fadeOut(400);
  $("#myForm").fadeOut(50);
});

$("#search-input").on("keyup", handleSearchFilterChange);
$("#filterCriteria").on("change", handleSearchFilterChange);
$("#search-field").submit(function (event) {
  event.preventDefault();
  $("#search-icon").addClass("fa-beat");
  handleSearchFilterChange;
  setTimeout(function () {
    $("#search-icon").removeClass("fa-beat");
  }, 3000);
});
//Search and filter function
function handleSearchFilterChange() {
  var filterResultEmpty = 1;
  var searchResultEmpty = 1;
  var search_filter_Result = 1;
  $(".item").each(function () {
    var category = $("#filterCriteria").val();
    var input = $("#search-input").val().toLowerCase();
    var shouldShow = 1;
    var this_h6 = $(this).children("h6");
    if (category === "All" || this_h6.text() === category || $(this).hasClass("add-charity-item")) {
      filterResultEmpty = 0;
    } else {
      shouldShow = 0;
    }
    var this_h3 = $(this).children("h3");
    if (this_h3.text().toLowerCase().indexOf(input) >= 0 || input === "") {
      searchResultEmpty = 0;
    } else {
      shouldShow = 0;
    }
    if (shouldShow) {
      $(this).show();
      search_filter_Result = 0;
    } else {
      $(this).hide();
    }
  });
  if (searchResultEmpty) {
    $(".notFound").show();
    $(".notFound").html(
      'No charities match your search <i class="fa fa-search-minus"></i>'
    );
  } else if (filterResultEmpty) {
    $(".notFound").show();
    $(".notFound").html(
      'No charities match your filter <i class="fa-solid fa-filter"></i>'
    );
  } else if (search_filter_Result) {
    $(".notFound").show();
    $(".notFound").html("No charities match your Search with that filter");
  } else {
    $(".notFound").hide();
  }
}
if ($(".item").length === 1) {
  $(".notFound").show();
  $(".notFound").html(
    'There is no charities at the moment <i class="fa-solid fa-box-open"></i>'
  );
} else {
  $(".notFound").hide();
}
// Charity clilck animation
let isClicked = false;
$(".item:not(.add-charity-item)").mousedown(function () {
  isClicked = true;
});
$(".item:not(.add-charity-item)").mouseup(function () {
  if (isClicked) {
    isClicked = false;
    $(this).addClass("active");
    setTimeout(() => {
      $(this).removeClass("active");
    }, 500);
  }
});