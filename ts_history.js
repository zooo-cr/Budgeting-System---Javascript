import { transactions } from './formhandling.js';

export function displayTransactions() {
    let history = document.getElementById("transactionHistory");

    // Clear the existing table rows
    history.innerHTML = "";

    // Loop through every transaction
    transactions.forEach(function(transaction) {
        let row = document.createElement("tr");

        let id = document.createElement("td");
        id.textContent = transaction.id;

        let type = document.createElement("td");
        type.textContent = transaction.type;

        let category = document.createElement("td");
        category.textContent = transaction.category;

        let amount = document.createElement("td");
        amount.textContent = "₱" + transaction.amount.toFixed(2);

        let description = document.createElement("td");
        description.textContent = transaction.description;

        let date = document.createElement("td");
        date.textContent = transaction.date;

        // Add the cells to the row
        row.appendChild(id);    
        row.appendChild(type);
        row.appendChild(category);
        row.appendChild(amount);
        row.appendChild(description);
        row.appendChild(date);

        // Add the row to the table
        history.appendChild(row);
    });
}