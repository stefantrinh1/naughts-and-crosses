console.log("Tic Tac Toe Opened")

var cells = document.querySelectorAll("td")
var clear = document.querySelector("#clear")

clear.addEventListener("click", clearBoard)

function changeMarker() {
  if (this.textContent ==="") {
    this.textContent = "X"
  }
  else if (this.textContent ==="X") {
    this.textContent = "O"
  }
  else if (this.textContent ==="O") {
    this.textContent = ""
  }
}

function clearBoard() {
  for (var i = 0; i < cells.length; i++) {
  cells[i].textContent = ""
  }
}

for (var i = 0; i < cells.length; i++) {
 cells[i].addEventListener("click", changeMarker)
}
