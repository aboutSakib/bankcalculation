const calculate = document.querySelector(".calculate");

calculate.addEventListener("click", (event) => {
  event.preventDefault();
  const carPrize = document.getElementById("amount").value;
  const instantPayment = document.getElementById("discount_percentage");
  const duePayment = document.getElementById("discount_amount");
  const instantRate = document.getElementById("interst_rate");

  instantPayment.value = (carPrize * 20) / 100;
  duePayment.value = carPrize - instantPayment.value;
  instantRate.value = (duePayment.value * 3) / 100;

  function add() {
    const num1 = parseFloat(document.getElementById("discount_amount").value);
    const num2 = parseFloat(document.getElementById("interst_rate").value);
    const result = document.getElementById("result");
    if (num1 && num2 !== NaN) {
      let sum = num1 + num2;
      result.value = sum;
      return false;
    } else {
      alert("Enter Valid Number");
    }
  }
  calculate.addEventListener("click", () => {
    add();
  });
  calculate.addEventListener("click", () => {
    num1.value = " ";
    num2.value = " ";
    result.value = " ";
  });

  // totalPrize
  function total() {
    const num1 = parseFloat(document.getElementById("amount").value);
    const num2 = parseFloat(document.getElementById("interst_rate").value);
    const result = document.getElementById("totalamount");
    if (num1 && num2 !== NaN) {
      let sum = num1 + num2;
      result.value = sum;
      return false;
    } else {
      alert("Enter Valid Number");
    }
  }
  calculate.addEventListener("click", () => {
    total();
  });
  calculate.addEventListener("click", () => {
    num1.value = " ";
    num2.value = " ";
    result.value = " ";
  });
});


