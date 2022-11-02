const ball = document.querySelector('.ball');

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.1;

// Update ball position
function animate() {
  //Determine distance between ball and mouse
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;

  // Find position of ball and some distance * speed
  ballX = ballX + distX * speed;
  ballY = ballY + distY * speed;

  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';

  requestAnimationFrame(animate);
}
animate();

// Move ball with cursor
document.addEventListener('mousemove', function (event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
});

ball.addEventListener('mouseover', function handleMouseOver() {
  ball.style.outline = 'rgb(255, 255, 255) solid 20px';
});

$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
