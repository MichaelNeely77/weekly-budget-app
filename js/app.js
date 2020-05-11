// Classes

class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }

    substractFromBudget(amount) {
        return this.budgetLeft -=amount;
    }
}

class HTML {
    insertBudget(amount) {
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;

    }

    printMessage(message, className) {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('text-center', 'alert', className);
        messageWrapper.appendChild(document.createTextNode(message));

        //Insert into HTML
        document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);

        setTimeout(function() {
            document.querySelector('.primary .alert').remove();
        }, 3000)
    }

    addExpenseToList(name, amount) {
        const expensesList = document.querySelector('#expenses ul');

        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${name}
            <span class="badge badge-primary badge-pill">$ ${amount}</span>
        `;

        expensesList.appendChild(li);
}
        trackBudget(amount) {
            const budgetLeftDollars = budget.substractFromBudget(amount);
            budgetLeft.innerHTML = `${budgetLeftDollars}`;
            console.log(budgetLeftDollars);
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

        // Read the values from the budget form
        const expenseName = document.querySelector('#expense').value;
        const amount = document.querySelector('#amount').value;

        if (expenseName === '' || amount === '') {
            html.printMessage('There was an error, all fields are mandatory', 'alert-danger')
        } else {
            html.addExpenseToList(expenseName, amount);
            html.trackBudget(amount);
    }
});

}