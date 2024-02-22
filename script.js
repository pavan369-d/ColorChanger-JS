let buttons = document.querySelectorAll(".colors");
let con = document.getElementById("container");
buttons.forEach(function (colors) {
  console.log(colors);
  colors.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      con.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      con.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      con.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      con.style.backgroundColor = e.target.id;
    }
  });
});
