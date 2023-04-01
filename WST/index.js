function calc(){
    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    let result = document.getElementById("result");

    document.getElementById("addition").addEventListener("click", function(){
        result.value= parseInt(firstNumber.value)+parseInt(secondNumber.value);
    });

    document.getElementById("subtraction").addEventListener("click", function(){
        result.value = parseInt(firstNumber.value)-parseInt(secondNumber.value);
    });

    document.getElementById("multiplication").addEventListener("click", function(){
        result.value = parseInt(firstNumber.value)*parseInt(secondNumber.value);
    });

    document.getElementById("divide").addEventListener("click", function(){
        result.value = parseInt(firstNumber.value)/parseInt(secondNumber.value);
    });
}
calc();