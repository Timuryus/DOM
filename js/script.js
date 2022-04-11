const $drop = document.querySelector(".btn");
const $close = document.querySelector(".close");
const $card = document.querySelector(".card");

$drop.addEventListener("click", (e) => {
  e.preventDefault();

  $card.classList.toggle("active");
});

$close.addEventListener("click", (e) => {
  e.preventDefault();
  $card.classList.remove("active");
  $card.classList.add("button");
});
