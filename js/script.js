((d) => {

    let equals = d.getElementById("equals");
    let input = d.getElementById("input");
    let numbers = d.querySelectorAll(".printable");
    let reset = d.getElementById("reset");
    let backspace = d.getElementById("backspace");

    equals.addEventListener("click", () => {
        input.value = eval(input.value);
    });

    reset.addEventListener("click", () => {
        input.value = "";
    });

    numbers.forEach(number => {
        number.addEventListener('click', () => {
            input.value += number.textContent;
        })
    })

})(document);