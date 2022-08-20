const initialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const qty = document.querySelector("#quantity");
const calculateBtn = document.querySelector(".calculate-btn");
const message = document.querySelector(".message");

calculateBtn.addEventListener("click", function submitHandler() {
if(Number(initialPrice.value) > 0 && Number(qty.value) > 0 ) {
  calculateProfitLoss(
    Number(initialPrice.value),
    Number(currentPrice.value),
    Number(qty.value)
  );
} else {
  messageHandler("Invalid Data Entered");
}
});

function calculateProfitLoss(initial, current, quantity) {
  if (initial < current) {
    message.style.backgroundColor = "green";
    const profit = (current - initial) * quantity;
    const profitPercentage = (profit / (initial * quantity)).toFixed(2) * 100;
    return messageHandler(
      `The Profit  is: ${profit} and the Profit % is: ${profitPercentage}%`
    );
  } else if (initial > current) {
    message.style.backgroundColor = "red";
    const loss = (initial - current) * quantity;
    const lossPercentage = (loss / (initial * quantity).toFixed(2)) * 100;
    return messageHandler(
      `The Loss  is: ${loss} and the Loss % is: ${lossPercentage}%`
    );
  } else {
    messageHandler(`No Profit, No Loss. No Pain, No Gain`);
  }
}

function messageHandler(text) {
  message.innerText = text;
}
