let homeDisplay = document.getElementById("home-display")
let guessDisplay = document.getElementById("guess-display")
let home1 = document.getElementById("home-+1-btn")
let home2 = document.getElementById("home-+2-btn")
let home3 = document.getElementById("home-+3-btn")
let guess1 = document.getElementById("guess-+1-btn")
let guess2 = document.getElementById("guess-+2-btn")
let guess3 = document.getElementById("guess-+3-btn")

let newGame= document.getElementById("new-game")


home1.onclick = () => {
  homeDisplay.textContent++
}

home2.onclick = () => {
  homeDisplay.textContent = Number(homeDisplay.textContent) + 2
}
home3.onclick = () => {
  homeDisplay.textContent = Number(homeDisplay.textContent) + 3
}

guess1.onclick = () => {
  guessDisplay.textContent++
}

guess2.onclick = () => {
  guessDisplay.textContent = Number(guessDisplay.textContent) + 2
}

guess3.onclick = () => {
  guessDisplay.textContent = Number(guessDisplay.textContent) + 3
}

newGame.onclick = () => {
  homeDisplay.textContent = 0
  guessDisplay.textContent = 0
}