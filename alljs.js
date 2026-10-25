
let transactions = JSON.parse(
    localStorage.getItem("transactions") || "[]"
);

// Calculate totals and update the dashboard
function updateBalance() {
    let income = 0;
    let expenses = 0;

    transactions.forEach(function(transaction) {
        if (transaction.type === "income") {
            income += transaction.amount;
        } else if (transaction.type === "expense") {
            expenses += transaction.amount;
        }
    });

    let balance = income - expenses;

    const balanceElement = document.getElementById("balance");
    const limitElement = document.getElementById("limit");

    if (balanceElement) {
        balanceElement.textContent = "₱" + balance.toFixed(2);
    }

    if (limitElement) {
        limitElement.textContent = "₱" + income.toFixed(2);
    }
}

// Display the transaction history table
function displayTransactions() {
    const history = document.getElementById("transactionHistory");

    // The table exists only on the history page
    if (!history) return;

    history.innerHTML = "";

    transactions.forEach(function(transaction) {
        const row = document.createElement("tr");

        const values = [
            transaction.id,
            transaction.type,
            transaction.category,
            "₱" + transaction.amount.toFixed(2),
            transaction.description,
            transaction.date
        ];

        values.forEach(function(value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        history.appendChild(row);
    });
}

// Save the array and refresh the page elements
function saveTransactions() {
    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );

    updateBalance();
    displayTransactions();
}

// Handle both forms
function setupForm(formId, type) {
    const form = document.getElementById(formId);

    // Skip this form if it doesn't exist on the current page
    if (!form) return;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Find inputs inside the submitted form
        const category = form.querySelector("#category").value.trim();
        const amount = Number(form.querySelector("#amount").value);
        const description = form.querySelector("#description").value.trim();
        const date = form.querySelector("#date").value;

        // Basic validation
        if (!category || !description || !date ||
            !Number.isFinite(amount) || amount <= 0) {
            alert("Please enter valid transaction details.");
            return;
        }

        // Generate an ID that won't duplicate existing IDs
        const nextId = transactions.reduce(function(maxId, transaction) {
            return Math.max(maxId, Number(transaction.id) || 0);
        }, 0) + 1;

        const transaction = {
            id: nextId,
            type: type,
            category: category,
            amount: amount,
            description: description,
            date: date
        };

        transactions.push(transaction);

        saveTransactions();
        form.reset();

        console.log("Saved transactions:", transactions);
    });
}

// Connect the two forms
setupForm("addincomeForm", "income");
setupForm("addexpenseForm", "expense");

// Run on whichever page is currently open
updateBalance();
displayTransactions();
