((d) => {

    let equals = d.getElementById("equals");
    let result = d.getElementById("result");
    let input = d.getElementById("input");
    let numbers = d.querySelectorAll(".printable");
    let reset = d.getElementById("reset");

    currentResult = "";

    equals.addEventListener("click", () => {
        result.textContent = eval(+currentResult + input.value);
        currentResult = result.textContent;
        input.value = "";
    });

    reset.addEventListener("click", () => {
        currentResult = "";
        result.textContent = "0";
        input.value = "";
    });

    numbers.forEach(number => {
        number.addEventListener('click', () => {
            input.value += number.textContent;
        })
    })

})(document);