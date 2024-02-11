const movingButton = document.getElementById('noButton');
const showNoButton = document.getElementById('showNoButton');

const containerWidth = window.innerWidth;
const containerHeight = window.innerHeight;
const buttonWidth = movingButton.offsetWidth;
const buttonHeight = movingButton.offsetHeight;
let xDirection = 1;
let yDirection = 1;

const maxXDirection = 3;
const maxYDirection = 3;

function getRandomBoolean() {
  // Generate a random number between 0 and 1
  const randomNumber = Math.random();

  // Set the probability of selecting true and false
  const trueProbability = 0.2; // 20% probability of true
  const falseProbability = 1 - trueProbability; // 80% probability of false

  // Return true if the random number is less than trueProbability, otherwise return false
  return randomNumber < trueProbability;
}

function moveButton() {
  let x = parseInt(movingButton.style.left) || 0;
  let y = parseInt(movingButton.style.top) || 0;

  const shouldChangeDirection = getRandomBoolean();

  if (shouldChangeDirection) {
    xDirection = xDirection + Math.random() * 2 - 1;
    yDirection = yDirection + Math.random() * 2 - 1;
    if (xDirection > maxXDirection) {
      xDirection = maxXDirection;
    }
    if (yDirection > maxYDirection) {
      yDirection = maxYDirection;
    }
  }

  if (x <= 0 || x >= containerWidth - buttonWidth) {
    xDirection *= -1;
    x = Math.max(0, Math.min(containerWidth - buttonWidth, x)); // Keep the button inside the container
  }

  if (y <= 0 || y >= containerHeight - buttonHeight) {
    yDirection *= -1;
    y = Math.max(0, Math.min(containerHeight - buttonHeight, y)); // Keep the button inside the container
  }

  x += 2 * xDirection; // Increase the speed by changing the multiplier (e.g., 10)
  y += 2 * yDirection; // Increase the speed by changing the multiplier (e.g., 10)

  movingButton.style.left = x +'px';
  movingButton.style.top = y + 'px';

  requestAnimationFrame(moveButton);
}

showNoButton.addEventListener('click', function() {
  movingButton.style.display = 'block';
  showNoButton.style.display = 'none';
  moveButton(); // Start button movement after showing it
});
