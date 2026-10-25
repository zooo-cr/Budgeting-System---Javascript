export let income = 0;
let expenses = 0;
import { transactions } from './formhandling.js';

transactions.forEach(transaction => {
    if (transaction.type === "income") {
        income += transaction.amount;
    } else {
        expenses += transaction.amount;
    }
});

export let balance = income - expenses;

