let firstNumber = "";
let secondNumber = "";
let operand = "";
let finish = false;
const digit = ["0","1","2","3","4","5","6","7","8","9","."];
const action = ["*","/","+","-"];
const out = document.querySelector(".screen");
function clearAll(){
    firstNumber = "";
    secondNumber = "";
    operand = "";
    finish = false;
    out.textContent = 0;
}
document.querySelector("#c").onclick = clearAll;
document.querySelector(".button-container").onclick = function(event) {
    if(!event.target.classList.contains("btn")) return;
    if(event.target.classList.contains("c")) return;
        
    

        out.textContent = "";

        const key = event.target.textContent;
       
        console.log(key);
        if(digit.includes(key)){
            if(secondNumber === "" && operand === ""){
            firstNumber += key;
            out.textContent = firstNumber;
            }
            else if(firstNumber !== "" && secondNumber !== "" && finish){
                secondNumber = key;
                finish = false;
                out.textContent = secondNumber;

            }
            else{
                secondNumber += key;
                out.textContent = secondNumber;
            }
            return;

        }
        if(action.includes(key)){
            operand = key;
            out.textContent = operand;
            return

        }
        if(key === "="){
            switch (operand) {
                case "+":
                    firstNumber = (+firstNumber) + (+secondNumber);
                    break;

                case "-":
                    firstNumber = firstNumber - secondNumber;
                    break;

                case "*":
                    firstNumber = firstNumber * secondNumber;
                    break;
                case "/":
                    if(secondNumber === "0"){
                        out.textContent = "error";
                        firstNumber = "";
                        secondNumber = "";
                        operand = "";
                        return;
                    }
                    firstNumber = firstNumber / secondNumber;
                    break;
                
            }
            finish = true;
            out.textContent = firstNumber;
        }

    }

    // Theme


const whiteThemeButton = document.querySelector(".white-theme");
const mainDiv = document.querySelector("#container");




const currentTheme = localStorage.getItem("theme");
console.log(currentTheme);
let theme = "dark";
if (currentTheme == "white"){
    mainDiv.classList.add("white");
    mainDiv.classList.toggle("dark");

}



whiteThemeButton.addEventListener("click", function()
{   
    mainDiv.classList.add("white");
    mainDiv.classList.toggle("dark");
    if(mainDiv.classList.contains("dark")){
        theme = "dark";
    }
    else if (mainDiv.classList.contains("white")){
        theme = "white";
    }
        
        localStorage.setItem("theme", theme);
    
        
     
})
