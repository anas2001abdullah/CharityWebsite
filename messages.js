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