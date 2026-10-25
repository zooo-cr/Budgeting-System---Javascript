import { balance } from './calcs.js'; // Example initial balance
import { income } from './calcs.js'; // Example initial income
limit = income; // Example spending limit

document.getElementById('balance').textContent = balance;
document.getElementById('limit').textContent = limit;

