const btn = document.querySelector(".drop-down-btn");
const menu = document.querySelector(".drop-down");

btn.addEventListener("click", () => {
  menu.classList.toggle("closed");
  btn.classList.toggle("aberto");
});

// botoes da pagina conv
const toggleBtns = document.querySelectorAll('.toggle-btn');

toggleBtns.forEach((btn) => {
  const targetId = btn.dataset.target;
  const target = document.getElementById(targetId);

  btn.addEventListener('click', () => {
    target.classList.toggle('show');
  });
});