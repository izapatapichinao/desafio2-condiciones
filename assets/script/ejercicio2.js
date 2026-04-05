const stickerOne = document.getElementById("stickerOne");
const stickerTwo = document.getElementById("stickerTwo");
const stickerThree = document.getElementById("stickerThree");
let totalStickers = 0;
const buyButton = document.getElementById("buyButton");

const resultado = document.getElementById("textoTotal");

function sumarStickers(){
    totalStickers = Number(stickerOne.value) + Number(stickerTwo.value) + Number(stickerThree.value);
    console.log(totalStickers);
}

buyButton.addEventListener("click", () => {
    sumarStickers();
    if(totalStickers === 1){
        resultado.innerHTML = "llevas solo" + totalStickers + " sticker"
    } else if(totalStickers  <= 10) {
        resultado.innerHTML = "llevas " + totalStickers + " stickers"
    } else if(totalStickers > 10){
        resultado.innerHTML = "llevas demasiados stickers!"
    }
});