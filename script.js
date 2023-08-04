var tl = gsap.timeline();

tl.from(".heading span", {
  scale: 1,
  y: -500,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});
tl.from(".heading2 span", {
  scale: 1,
  y: -500,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});
let maintitle = document.querySelector("#title");
let counter = 0;
let dec = document.getElementById("decrement");
let inc = document.getElementById("increment");
let reset = document.getElementById("reset");

dec.addEventListener("click", function () {
  counter--;
  maintitle.textContent = counter;
});
inc.addEventListener("click", function () {
  counter++;
  maintitle.textContent = counter;
});
reset.addEventListener("click", function () {
  counter = 0;
  maintitle.textContent = counter;
});
