let ethQunatity = document.getElementById('quantity');
let decreaseQuantity = document.getElementById('minus');
let increaseQuantity = document.getElementById('plus');
let ethPrice = document.getElementById('ether-value');
let price = 0.05;
let counter = ethQunatity.textContent;

decreaseQuantity.addEventListener('click', () => {
    if (ethQunatity.textContent > 1) {
        ethQunatity.textContent = --counter;
        price -= 0.05;
        ethPrice.textContent = price.toFixed(2);
    }
});

increaseQuantity.addEventListener('click', () => {
    if (ethQunatity.textContent < 20) {
        ethQunatity.textContent = ++counter;
        price += 0.05;
        ethPrice.textContent = price.toFixed(2);
    }
});

// Increase qunatity minted number
let numberMinted = document.getElementById('minted-number');
let holdInitialValue = parseInt(numberMinted.textContent, 10);
//  Add the random nums to the MINTED number 
function updateNumberMinted() {
    if(holdInitialValue < 1930) {
        holdInitialValue += Math.floor(Math.random() * 10);
        numberMinted.textContent = holdInitialValue;
    }
}
// Start increasing the number of NFT Minted when page loaded
setInterval(updateNumberMinted, 500);
