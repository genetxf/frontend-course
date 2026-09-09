# Assignment: Simple Bank Project

## Goal

Create a simple bank account project using HTML, CSS, and JavaScript.

Students will practice:

- Selecting HTML elements with JavaScript
- Using variables
- Using functions
- Using `if` and `else`
- Updating text on the page
- Handling button clicks

## Project Features

Your bank project should have:

1. A current balance
2. An input field for entering an amount
3. A Deposit button
4. A Withdraw button
5. A Reset Account button
6. Total deposit amount
7. Total withdraw amount
8. A message area for success or error messages

## Starting Balance

The account should start with:

```text
$1000
```

## Rules


- Do not allow deposit or withdraw if the amount is empty, zero, or negative.
- Do not allow withdraw if the amount is greater than the current balance.
- After a successful deposit, update the balance and total deposit amount.
- After a successful withdraw, update the balance and total withdraw amount.
- Reset should return the balance to `$1000`.
- Reset should return total deposit and total withdraw to `$0`.

## Files

Use these files:

```text
index.html
style.css
script.js
```

## Student Tasks

1. Open `index.html` in a browser.
2. Add an amount in the input field.
3. Click Deposit and check if the balance increases.
4. Click Withdraw and check if the balance decreases.
5. Try to withdraw more money than the balance.
6. Check if the error message appears.
7. Click Reset Account and check if all values reset.

