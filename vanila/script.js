const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const backdrop = document.querySelector("#backdrop");

openBtn.addEventListener("click", () => {
  backdrop.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  backdrop.classList.add("hidden");
});
