const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    /* const attribute = button.getAttribute("id");
    console.log(attribute);
    body.style.backgroundColor = attribute; */
    body.style.backgroundColor = e.target.id;
  });
});
