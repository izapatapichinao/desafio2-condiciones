const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");
const numberThree = document.getElementById("numberThree");

const passwordStatus = document.getElementById("passwordStatus");
const buttonPassword = document.getElementById("buttonPassword");

buttonPassword.addEventListener("click", () => {
    const password = numberOne.value + numberTwo.value + numberThree.value;

    if (password === "911") {
        passwordStatus.innerHTML = "Contraseña 1 correcta";
        passwordStatus.style.color = "green";
    }else if (password === "714") {
        passwordStatus.innerHTML = "Contraseña 2 correcta";
        passwordStatus.style.color = "green";
    } else {
        passwordStatus.innerHTML = "Contraseña incorrecta";
        passwordStatus.style.color = "red";
    }
});