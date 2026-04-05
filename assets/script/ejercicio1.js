chopperCard = document.getElementById("chopperCard");

chopperCard.addEventListener("click", () => {
    if(chopperCard.style.border === "") {
        chopperCard.style.border = "3px solid #ff0000ff";
    } else {
        chopperCard.style.border = "";
    }
});