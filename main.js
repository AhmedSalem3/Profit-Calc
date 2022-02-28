let submitBtn = document.querySelector('input[type="submit"]');

let allInputs = document.querySelectorAll("input:not([type = 'submit'])");
let amountInput = document.querySelector("input.bought");
let oldPrice = document.querySelector("input.past-price");
let percentage = document.querySelector("input.changed-by");

let profitResult = document.querySelector(".final .profit");
let totalOutcome = document.querySelector(".final .total-outcome");

// setting the conditions on submitting

submitBtn.addEventListener("click", function () {
  let oldValue = +amountInput.value * +oldPrice.value;
  let currentValue = (Number(percentage.value) / 100 + 1) * oldValue;
  let profitValue = currentValue - oldValue;
  if (Math.sign(profitValue) === -1) {
    document.querySelector(".final .status").innerHTML = "Loss";
  }
  if (
    amountInput.value !== "" &&
    oldPrice.value !== "" &&
    percentage.value !== ""
  ) {
    profitResult.innerHTML = profitValue.toFixed(2) + "$";
    totalOutcome.innerHTML = `<del>${oldValue.toFixed(
      2
    )}$</del> ${currentValue.toFixed(2)}$`;
  }
});
