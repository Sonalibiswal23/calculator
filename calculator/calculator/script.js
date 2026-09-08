const display = document.getElementById("display");


/* Add value to display */

function appendValue(value) {

    display.value += value;

}


/* Clear display */

function clearDisplay() {

    display.value = "";

}


/* Delete last character */

function deleteLast() {

    display.value = display.value.slice(0, -1);

}


/* Calculate result */

function calculate() {

    try {

        if (display.value === "") {
            return;
        }

        display.value = eval(display.value);

    } catch (error) {

        display.value = "Error";

    }

}


/* Keyboard Support */

document.addEventListener("keydown", function(event) {

    const key = event.key;

    // Numbers and operators

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ) {

        appendValue(key);

    }

    // Enter = Calculate

    if (key === "Enter") {

        calculate();

    }

    // Backspace = Delete

    if (key === "Backspace") {

        deleteLast();

    }

    // Escape = Clear

    if (key === "Escape") {

        clearDisplay();

    }

});