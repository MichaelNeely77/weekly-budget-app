// Classes

class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }
}

class HTML {
    insertBudget(amount) {
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;

    }
}



// Variables
const addExpenseForm = document.querySelector('#add-expense'),
    budgetTotal = document.querySelector('span#total'),
    budgetLeft = document.querySelector('span#left');

let budget, userBudget;

html = new HTML();


// Event Listeners
eventListeners();
function eventListeners() {

    document.addEventListener('DOMContentLoaded', function() {
        userBudget = prompt('What\'s your budget for this week');

        if(userBudget === null || userBudget === '' || userBudget === '0') {
            window.location.reload();
        } else {
            budget = new Budget(userBudget);

            // instantiate the HTML class
            html.insertBudget(budget.budget);
        }
    });

    addExpenseForm.addEventListener('submit', function(e) {
        e.preventDefault();
    });
}