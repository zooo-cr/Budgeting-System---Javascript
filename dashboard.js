let balance = 0; // Example initial balance
let limit = 0; // Example spending limit

document.getElementById('balance').textContent = balance;
document.getElementById('limit').textContent = limit;


let transactions = JSON.parse(
    localStorage.getItem("transactions") || "[]"
);

document.getElementById("addincomeForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let category = document.getElementById("category").value;
        let amount = Number(document.getElementById("amount").value);
        let description = document.getElementById("description").value;
        let date = document.getElementById("date").value;

        let transaction = {
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
            
        console.log(transactions);

        document.getElementById("addincomeForm").reset();
    });

    
document.getElementById("addexpenseForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let category = document.getElementById("category").value;
        let amount = Number(document.getElementById("amount").value);
        let description = document.getElementById("description").value;
        let date = document.getElementById("date").value;

        let transaction = {
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
        console.log(transactions);

        document.getElementById("addexpenseForm").reset();
    });

    