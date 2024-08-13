const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", (calculator) => {
        console.log("btn")
        if (btn.innerText == "=") {
            input.value = eval(input.value);
          }
          else if (btn.innerText == "C") {
            input.value = "";}

          else {
            input.value += btn.innerText;
          }
    });

});