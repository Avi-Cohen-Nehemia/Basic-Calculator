((d) => {


    let input = d.getElementById("input");


    //Calculate the current expression
    let equals = d.getElementById("equals");

    equals.addEventListener("click", () => {
        input.value = eval(input.value);
    });

    //Delete last printed character
    let backspace = d.getElementById("backspace");
    backspace.addEventListener("click", () => {
        input.value = input.value.slice(0, -1);
    })

    //Reset the calculator
    let reset = d.getElementById("reset");

    reset.addEventListener("click", () => {
        input.value = "0";
    });


    //Make the numbers and operators appear in the input
    let numbers = d.querySelectorAll(".printable");

    numbers.forEach(number => {
        number.addEventListener('click', () => {

            if (input.value === "0") {
                input.value = number.textContent;

            } else {
                input.value += number.textContent;
            }
        })
    })

})(document);