let incomeid = 0;
let expenseid = 0;

export let transactions = JSON.parse(
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

        let category = document.getElementById("category").value;
        let amount = Number(document.getElementById("amount").value);
        let description = document.getElementById("description").value;
        let date = document.getElementById("date").value;

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

    