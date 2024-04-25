const BUTTONS = document.querySelectorAll("button");
const DISPLAY = document.querySelector(".display");


BUTTONS.forEach(button => {
    button.addEventListener("click", () => {
        const pressedButton = button.textContent;

        if (DISPLAY.textContent === "") {
            DISPLAY.textContent = "0";
        }

        if (button.id === "c") {
            DISPLAY.textContent = "0";
            return;
        }

        if (button.id === "delete") {
            if (DISPLAY.textContent.length === 1) {
                DISPLAY.textContent = "0";
            } else {
                DISPLAY.textContent = DISPLAY.textContent.slice(0, -1);
            }
            return;
        }

        if (button.id === "=") {
            DISPLAY.textContent = eval(DISPLAY.textContent);
            return;
        }

        if (button.id === "sin") {
            DISPLAY.textContent = Math.sin(DISPLAY.textContent);
            return;
        } else if (button.id === "cos") {
            DISPLAY.textContent = Math.cos(DISPLAY.textContent);
            return;
        } else if (button.id === "tan") {
            DISPLAY.textContent = Math.tan(DISPLAY.textContent);
            return;
        } else if (button.id === "raiz") {
            DISPLAY.textContent = Math.sqrt(DISPLAY.textContent);
            return;
        } else if (button.id === "potencia") {
            DISPLAY.textContent += "**";
            return;
        }

        if (button.id === "oct") {
            let numberToOcta = parseInt(DISPLAY.textContent);
            let octaNumber = numberToOcta.toString(8);
            DISPLAY.textContent = octaNumber;
            return;
        } else if (button.id === "bin") {
            let numberToBin = parseInt(DISPLAY.textContent);
            let binNumber = numberToBin.toString(2);
            DISPLAY.textContent = binNumber;
            return;
        } else if (button.id === "hex") {
            let numberToBin = parseInt(DISPLAY.textContent);
            let binNumber = numberToBin.toString(16);
            DISPLAY.textContent = binNumber;
            return;
        } else if (button.id === "dec") {
            let numberToDec = parseInt(DISPLAY.textContent);
            let binNumber = numberToBin.toString(10);
            DISPLAY.textContent = binNumber;
            return;
        }


        if (DISPLAY.textContent === "0") {
            DISPLAY.textContent = pressedButton;
        } else {
            DISPLAY.textContent += pressedButton;
        }
    })

})
