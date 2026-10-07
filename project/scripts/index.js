// Array of Objects
const financialTips = [
    {
        id: "tip-1",
        title: "The 50/30/20 Rule",
        category: "Budgeting",
        description: "Allocate 50% of income to needs, 30% to wants, and 20% to savings and debt payoff."
    },
    {
        id: "tip-2",
        title: "Emergency Fund First",
        category: "Savings",
        description: "Aim to build 3 to 6 months of basic living expenses before investing heavily."
    },
    {
        id: "tip-3",
        title: "Automate Savings",
        category: "Automation",
        description: "Set up direct recurring transfers to savings accounts immediately after paydays."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    displayTips(financialTips);
    initCounter();
});

// Function 1: Display Tips dynamically using Template Literals
function displayTips(tips) {
    const container = document.getElementById("tips-container");
    if (!container) return;

    container.innerHTML = tips.map(tip => `
        <article class="card">
            <h3>${tip.title}</h3>
            <span class="badge">${tip.category}</span>
            <p>${tip.description}</p>
            <button onclick="bookmarkTip('${tip.id}')">Save Tip</button>
        </article>
    `).join("");
}

// Function 2: LocalStorage counter interaction
function bookmarkTip(tipId) {
    let count = Number(localStorage.getItem("savedTipsCount")) || 0;
    count++;
    localStorage.setItem("savedTipsCount", count);
    updateCounterDisplay(count);
}

function initCounter() {
    let count = Number(localStorage.getItem("savedTipsCount")) || 0;
    updateCounterDisplay(count);

    const resetBtn = document.getElementById("reset-counter-btn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            localStorage.setItem("savedTipsCount", 0);
            updateCounterDisplay(0);
        });
    }
}

function updateCounterDisplay(count) {
    const display = document.getElementById("saved-count");
    if (display) {
        display.textContent = count;
    }
}