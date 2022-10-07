var progressBar = document.querySelector('.progress-bar');
var circles = document.querySelectorAll('.circle');
var previousButton = document.querySelector('.previous');
var nextButton = document.querySelector('.next');
var active = 0;

// Events on Next Button
nextButton.addEventListener('click', function () {
  active++;

  // Condition on next Button
  if (active < circles.length) {
    circles[active].classList.add('active');
    previousButton.classList.remove('disabled')
    previousButton.removeAttribute('disabled')
  }
  if (active == circles.length - 1) {
    nextButton.classList.add('disabled')
    nextButton.setAttribute('disabled', true)
  }
  progressBarWidth()
})


// Events on  Previous Button
previousButton.addEventListener('click', function () {

  // Conditon on Previous Button
  if (active < circles.length) {
    circles[active--].classList.remove('active')
    nextButton.classList.remove('disabled')
    nextButton.removeAttribute('disabled')
  }
  if (active === 0) {
    previousButton.classList.add('disabled')
    previousButton.setAttribute('disabled', true)
  }
  progressBarWidth();
})

// Function for Progress Bar
function progressBarWidth() {
  var activeBar = document.querySelectorAll('.active');
  progressBar.style.width = (activeBar.length - 1) / (circles.length - 1) * 100 + '%';
}