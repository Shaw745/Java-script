// write a simple atm js algo
// checkBalance
// withdrawAmount
// depositAmount
// checkPin



const pin = 1234;
let attempts = 3;
let balance = 5000;

function checkPin() {
  while (attempts > 0) {
    let enteredPin = parseInt(prompt("Enter your PIN:"));

    if (enteredPin === pin) {
      alert("PIN accepted. Welcome!");
      atmMenu();
      return;
    } else {
      attempts--;
      alert`(Incorrect PIN. You have ${attempts} attempts left.)`;
    }
  }

  alert("You have been locked out. Please contact the bank.");
}

function checkBalance() {
  alert`(Your current balance is $${balance})`;
}

function withdraw() {
  let amount = parseFloat(prompt("Enter amount to withdraw:"));

  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount.");
  } else if (amount > balance) {
    alert("Insufficient funds.");
  } else {
    balance -= amount;
    alert`(Withdrawal successful. New balance: $${balance})`;
  }
}

function deposit() {
  let amount = parseFloat(prompt("Enter amount to deposit:"));

  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount.");
  } else {
    balance += amount;
    alert`(Deposit successful. New balance: $${balance})`;
  }
}

function atmMenu() {
  while (true) {
    let choice = prompt(
      "Choose an option:\n1. Check Balance\n2. Withdraw Money\n3. Deposit Money\n4. Exit"
    );

    if (choice === "1") {
      checkBalance();
    } else if (choice === "2") {
      withdraw();
    } else if (choice === "3") {
      deposit();
    } else if (choice === "4") {
      alert("Thank you for using the ATM.");
      return;
    } else {
      alert("Invalid option. Try again.");
    }
  }
}

// Start the ATM program
checkPin();
