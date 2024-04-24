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

       

        if (DISPLAY.textContent === "0") {
            DISPLAY.textContent = pressedButton;
        } else {
            DISPLAY.textContent += pressedButton;
        }
    })

})