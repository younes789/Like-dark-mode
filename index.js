const img = document.querySelector("img");
const icon = document.querySelector(".icon");
const countEl = document.querySelector("span");
let count = 0;
img.addEventListener("dblclick", () => {
  count++;
  icon.classList.add("like");
  countEl.innerHTML = count;
  setTimeout(() => {
    icon.classList.remove("like");
  }, 1200);
});
var color1 = document.getElementsByClassName("fas fa-heart")[0];
var color2 = document.getElementsByClassName("fa-thumbs-down")[0];
function like() {
  color1.style.color = color1.style.color === "blue" ? "black" : "blue";
  color2.style.color = "black";
}

function dislike() {
  color1.style.color = "black";
  color2.style.color = color2.style.color === "red" ? "black" : "red";
}
function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener("load", addDarkmodeWidget);

