let balance = 1000;
let totalDeposit = 0;
let totalWithdraw = 0;

let amountInput = document.getElementById("amountInput");
let balanceText = document.getElementById("balance");
let totalDepositText = document.getElementById("totalDeposit");
let totalWithdrawText = document.getElementById("totalWithdraw");
let messageText = document.getElementById("message");

function showBalance() {
  balanceText.textContent = "$" + balance;
}

function showTotals() {
  totalDepositText.textContent = "$" + totalDeposit;
  totalWithdrawText.textContent = "$" + totalWithdraw;
}

function showMessage(text, isError) {
  messageText.textContent = text;

  if (isError === true) {
    messageText.classList.add("error");
  } else {
    messageText.classList.remove("error");
  }
}

function getAmount() {
  return Number(amountInput.value);
}

function clearAmount() {
  amountInput.value = "";
  amountInput.focus();
}

function depositMoney() {
  let amount = getAmount();

  if (amount <= 0) {
    showMessage("Please enter a valid amount.", true);
    return;
  }

  balance = balance + amount;
  totalDeposit = totalDeposit + amount;
  showBalance();
  showTotals();
  showMessage("Deposit successful.", false);
  clearAmount();
}

function withdrawMoney() {
  let amount = getAmount();

  if (amount <= 0) {
    showMessage("Please enter a valid amount.", true);
    return;
  }

  if (amount > balance) {
    showMessage("Not enough balance.", true);
    return;
  }

  balance = balance - amount;
  totalWithdraw = totalWithdraw + amount;
  showBalance();
  showTotals();
  showMessage("Withdrawal successful.", false);
  clearAmount();
}

function resetAccount() {
  balance = 1000;
  totalDeposit = 0;
  totalWithdraw = 0;
  showBalance();
  showTotals();
  showMessage("Account reset.", false);
  clearAmount();
}

document.getElementById("depositButton").addEventListener("click", depositMoney);
document.getElementById("withdrawButton").addEventListener("click", withdrawMoney);
document.getElementById("resetButton").addEventListener("click", resetAccount);

showBalance();
showTotals();
