let display = document.getElementById('display');

    function press(value) {
      display.value += value;
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    }

    function clearDisplay() {
      display.value = '';
    }
    
    const para =document.querySelector("p");
    const input=document.querySelector("input");
    const btn=document.querySelector("button");
    btn.addEventListener("click",() => {
    para.textContent = "output :";
    const num = input.value;
    input.value ="";
    input.focus ();
for (let i=1; i++; i<=num){
    let sqroot= Math.sqrt(i);
    if (Math.floor(sqrt) !== sqrt){
        continue;
    }
    para.textContent+= `${i}`;
}
    });