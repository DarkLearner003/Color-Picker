const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    const randomNumber = Math.floor(getRandomNumber());
    document.body.style.background = colors[randomNumber]
    color.textContent = colors[randomNumber]
    document.document.color.style.color = colors[randomNumber]
});


function getRandomNumber() {
    return Math.random() * colors.length;
}