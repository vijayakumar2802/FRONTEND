let display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteValue() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (!/^[0-9+\-*/.() ]+$/.test(display.value)) {
            throw new Error("Invalid input");
        }

        let result = Function("return (" + display.value + ")")();

        if (!Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Error";
    }
}