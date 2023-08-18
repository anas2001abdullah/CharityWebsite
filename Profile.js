

function adjustInputWidth(input) {
  input.style.width = ((input.value.length + 2) * 10) + 'px';
}

// Call the adjustInputWidth function on page load
window.onload = function() {
  var firstname = document.querySelector('.firstname');
  var lastname = document.querySelector('.lastname');
  adjustInputWidth(firstname);
  adjustInputWidth(lastname);
};
