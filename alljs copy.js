let balance = 0 || income - expenses; // Example initial balance
let income = 0;
let expenses = 0;
let limit = income || 0; // Example spending limit

document.getElementById('balance').textContent = balance;
document.getElementById('limit').textContent = limit;


//formhandling js
let incomeid = 0;
let expenseid = 0;

let transactions = JSON.parse(
    localStorage.getItem("transactions") || "[]"
);
displayTransactions();

document.getElementById("addincomeForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let category = document.getElementById("in_category").value;
        let amount = Number(document.getElementById("in_amount").value);
        let description = document.getElementById("in_description").value;
        let date = document.getElementById("in_date").value;

        let transaction = {
            id: incomeid++,
            type: "income",
            category: category,
            amount: amount,
            description: description,
            date: date
        };

        transactions.push(transaction);

            localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
            );
            
        displayTransactions();
        console.log(transactions);

        document.getElementById("addincomeForm").reset();
    });

    
document.getElementById("addexpenseForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let category = document.getElementById("ex_category").value;
        let amount = Number(document.getElementById("ex_amount").value);
        let description = document.getElementById("ex_description").value;
        let date = document.getElementById("ex_date").value;

        let transaction = {
            id: expenseid++,
            type: "expense",
            category: category,
            amount: amount,
            description: description,
            date: date
        };

        transactions.push(transaction);
            localStorage.setItem(
            "transactions",
            JSON.stringify(transactions)
            );

        displayTransactions();
        console.log(transactions);

        document.getElementById("addexpenseForm").reset();
    });

    

//calculations js
    
    
    transactions.forEach(transaction => {
        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expenses += transaction.amount;
        }
    });
    
    
    
 //transaction history js
    function displayTransactions() {
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