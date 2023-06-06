(function () {
  // Bind Click event to the drop down navigation button
  document.querySelector(".nav-button").addEventListener(
    "click",
    function () {
      /*  Toggle the CSS closed class which reduces the height of the UL thus 
          hiding all LI apart from the first */
      this.parentNode.parentNode.classList.toggle("closed");
    },
    false
  );
})();

const toggleBtns = document.querySelectorAll('.toggle-btn');

toggleBtns.forEach((btn) => {
  const targetId = btn.dataset.target;
  const target = document.getElementById(targetId);

  btn.addEventListener('click', () => {
    target.classList.toggle('show');
  });
});

// o header arrumado

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
  navbar.classList.add("sticky")
  } else {
  navbar.classList.remove("sticky");
  }
}

function updateSticky() {
  // Recalculate the offset after the image has loaded
  sticky = navbar.offsetTop;
  
  // Call the setSticky function to update the sticky class
  setSticky();
}

// Wait for the image to load before updating the sticky class
window.addEventListener("load", updateSticky);
