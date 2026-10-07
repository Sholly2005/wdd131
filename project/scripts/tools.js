// Array to hold expenses
let expenses = JSON.parse(localStorage.getItem("expenseData")) || [];

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("expense-form");
    const filterSelect = document.getElementById("filter-category");

    renderExpenses(expenses);

    // Event Listener 1: Form Submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const category = document.getElementById("category").value;
        const amount = parseFloat(document.getElementById("amount").value);

        if (category && !isNaN(amount)) {
            const newExpense = { id: Date.now(), category, amount };
            expenses.push(newExpense);
            saveAndRender();
            form.reset();
        }
    });

    // Event Listener 2: Conditional Branching with Array Filter Method
    filterSelect.addEventListener("change", (e) => {
        const selected = e.target.value;
        if (selected === "All") {
            renderExpenses(expenses);
        } else {
            const filtered = expenses.filter(item => item.category === selected);
            renderExpenses(filtered);
        }
    });
});

// Function 1: Render List and Calculate Total with Array Reduce
function renderExpenses(list) {
    const listElement = document.getElementById("expense-list");
    const totalElement = document.getElementById("total-amount");

    // Template Literals string construction
    listElement.innerHTML = list.map(item => `
        <li>
            <span>${item.category}: $${item.amount.toFixed(2)}</span>
            <button onclick="deleteExpense(${item.id})">Delete</button>
        </li>
    `).join("");

    // Array Method: reduce
    const total = list.reduce((sum, item) => sum + item.amount, 0);
    totalElement.textContent = total.toFixed(2);
}

// Function 2: Save to LocalStorage & Re-render
function saveAndRender() {
    localStorage.setItem("expenseData", JSON.stringify(expenses));
    renderExpenses(expenses);
}

// Global scope delete helper
window.deleteExpense = function(id) {
    expenses = expenses.filter(item => item.id !== id);
    saveAndRender();
};