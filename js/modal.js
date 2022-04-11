const $open = document.querySelector(".open");
const $close = document.querySelector(".close");
const $card = document.querySelector(".card");
const $label = document.querySelector(".label");
$open.addEventListener("click", (e) => {
  e.preventDefault();
  $card.classList.add("active");
  $close.classList.add("active");
  $label.classList.add("active");
  $open.classList.add("active");
});

$close.addEventListener("click", (e) => {
  e.preventDefault();
  $card.classList.remove("active");
  $close.classList.remove("active");
  $label.classList.remove("active");
  $open.classList.remove("active");
});
