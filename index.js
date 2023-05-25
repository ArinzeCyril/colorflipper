const colors = ["red", "blue", "pink", "yellow", "white", "indigo", "darkred", "green", "brown", "orange"]
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btn = document.querySelector("#btn")
const color = document.querySelector(".color")
const simple = document.querySelector("#simple")
const hexEl = document.querySelector("#hex")

let activeSimple = true
let activeHex = false

simple.addEventListener("click", () => {
    activeSimple = true
    activeHex = false
})
hexEl.addEventListener("click", () => {
    activeHex = true
    activeSimple = false
})

btn.addEventListener("click", () => {
    if (activeSimple) {
        randomNumber = getRandomArrIndex(colors)
        document.body.style.backgroundColor = colors[randomNumber]
        color.textContent = colors[randomNumber]
    } else if (activeHex) {
        hexColor ="#"
        for (let i = 0; i < 6; i++) {
            hexColor += hex[getRandomArrIndex(hex)];
        }
        document.body.style.backgroundColor = hexColor
        color.textContent = hexColor
    }

})

const getRandomArrIndex = (arr) => {
    return Math.floor( Math.random() * arr.length)
}

