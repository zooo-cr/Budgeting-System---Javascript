function getCategoryTotal(category) {
    let t = JSON.parse(localStorage.getItem("transactions")) || [];

    let expenses = t.filter(x =>
        x.type === "expense" && x.category === category
    );

    let total = expenses.reduce(
        (sum, x) => sum + Number(x.amount), 0
    );

    return total;
}


// Get all transactions
let transactions = JSON.parse(localStorage.getItem("transactions")) || [];


// Get all unique expense categories
let categories = [...new Set(
    transactions
        .filter(x => x.type === "expense")
        .map(x => x.category)
)];


// Display category totals
let container = document.getElementById("categoryTotals");

categories.forEach(category => {
    let total = getCategoryTotal(category);

    let item = document.createElement("p");
    item.textContent = `${category}: ₱${total}`;

    container.appendChild(item);
});
