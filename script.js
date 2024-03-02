let box = document.getElementById("container").children;
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  Array.from(box).forEach((e) => {
    e.style.backgroundColor = randomColorGenerator();
    e.style.color = randomColorGenerator();
  });
});

function randomColorGenerator() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1},${val2},${val3})`;
}
