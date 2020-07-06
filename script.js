let background = document.getElementById("background");

let colArray = [
  "blue",
  "yellow",
  "green",
  "black",
  "grey",
  "pink",
  "red",
  "navy",
];

function changeCol() {
  for (i = 0; i < colArray.length; i++) {
    background.classList.add(colArray[i]);
  }
}

document.getElementById("changeBTN").addEventListener("click", function () {
  changeCol();
});
