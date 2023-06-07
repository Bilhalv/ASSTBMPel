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