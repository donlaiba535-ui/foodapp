const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");

textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});


const btn= document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

const output1 = document.querySelector("#output1");
function handleClick (e) {
    output1.textContent +=`you clicked on a ${e.currentTarget.tagName}lement\n`;
}
const container= document.querySelector("#container");
container.addEventListener("click",handleClick);


