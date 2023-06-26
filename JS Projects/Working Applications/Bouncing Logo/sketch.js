let logo = document.getElementById('logo');

let speedX = 2;
let speedY = 2;

function bounce() {
  // Get the size of the element in the DOM and (x,y) relative to it
  let logoRect = logo.getBoundingClientRect();

  // If logo hits left or right side, reverse its X direction
  if (logoRect.left < 0 || logoRect.right > (window.innerWidth - logo.width)) {
    speedX = -speedX;
  }

  // If logo hits top or bottom side, reverse its Y direction
  if (logoRect.top < 0 || logoRect.bottom > (window.innerHeight - logo.height)) {
    speedY = -speedY;
  }

  // Update the logo's position
  logo.style.left = (logo.offsetLeft + speedX) + 'px';
  logo.style.top = (logo.offsetTop + speedY) + 'px';

  // Call bounce after a short delay -- We can also do a setTimeout but this works just fine
  requestAnimationFrame(bounce);
}

// Start the animation
bounce();