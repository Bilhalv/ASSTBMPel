const btn = document.querySelector(".drop-down-btn");
const menu = document.querySelector(".drop-down");

btn.addEventListener("click", () => {
  menu.classList.toggle("closed");
  btn.classList.toggle("aberto");
});
