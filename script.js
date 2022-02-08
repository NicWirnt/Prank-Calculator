// 1. Press Button, Display number to the screen
// in order from left to right
// 2. press = , show the total result
// 3. press AC , clear the screen
// 4. presss C, delete the last number/character

const button = document.querySelectorAll("button");
const displayElement = document.querySelector("#result");

let textToDisplay = "";
const symbols = ["/" , "*", "-" , "+"];

console.log(button);
button.forEach((btn)=>{
    btn.addEventListener("click", () => {
        const val = btn.innerText;
        
        displayElement.style.background = "";
        displayElement.style.color = "";

        if(textToDisplay.length < 1 && symbols.includes(val)) return;


        if(symbols.includes(val) && symbols.includes(textToDisplay[textToDisplay.length - 1])){
            const tempStr = textToDisplay.slice(0,-1) + val;
            return display(tempStr);
        }

        // WHEN = CLICKED
        if(val === "="){
            if(!textToDisplay.length) return;

            if(symbols.includes(textToDisplay[textToDisplay.length -1])) {
                textToDisplay = textToDisplay.slice(0,-1);
            }

            return onTotal();
        }

        if(val === "AC"){
            return resetDisplay();
        }   

        if(val === "C" ){
            textToDisplay = textToDisplay.slice(0, -1);
            return display(textToDisplay);
        }

        if(val === ".") {
            const tempStr = textToDisplay;
            console.log(tempStr);
            if(symbols.includes(tempStr)) return;
            }

        // if(val === "." && textToDisplay.includes(".")) {
        //     return;
        // }
        

        textToDisplay = textToDisplay + val;
        display(textToDisplay);
    });
});

// SHOW CLICKED BUTTON TO THE SCREEN
const display = (toDisplay) =>{
   
    displayElement.innerText = toDisplay || "0.00";
}


// CALCULATE TOTAL VALUE
const onTotal = () =>{ 
    const randVal = randomNumber();

    if(randVal > 0 ) {
        displayElement.style.background = "red";
        displayElement.style.color = "White";
        displayElement.classList.add("prank");
        displayElement.addEventListener("animationend", () =>{
            displayElement.classList.remove("prank");
        });
    }

    const total = eval(textToDisplay) + randVal;
    display(total);
    textToDisplay = "";
};

// RESET THE DISPLAY AREA
const resetDisplay = () =>{
    display("0.00");
    textToDisplay = "";
}

const randomNumber = () =>{
    const val = Math.floor(Math.random() * 10);

    return val < 5 ? val : 0;
}