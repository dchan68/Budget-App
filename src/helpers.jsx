const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0; //fetchData("budgets")?.length will get existing budget. If there is one, get the length. Otherwise, ?? 0 will return 0
    return `${existingBudgetLength * 34} 65% 50%`
}

//Local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

//Create budget
export const createBudget = ({
    name, amount
  }) => {
    const newItem = {
      id: crypto.randomUUID(),
      name: name,
      createdAt: Date.now(),
      amount: +amount,
      color: generateRandomColor()
    }
    const existingBudgets = fetchData("budgets") ?? []; //fetchData("budgets") ?? [] will check for existing budgets, if there isn't then it will return empty array
    return localStorage.setItem("budgets",
      JSON.stringify([...existingBudgets, newItem]))
  }

//Create expense
export const createExpense = ({
    name, amount, budgetId
  }) => {
    const newItem = {
      id: crypto.randomUUID(),
      name: name,
      createdAt: Date.now(),
      amount: +amount,
      budgetId: budgetId
    }
    const existingExpenses = fetchData("expenses") ?? []; //fetchData("budgets") ?? [] will check for existing budgets, if there isn't then it will return empty array
    return localStorage.setItem("expenses",
      JSON.stringify([...existingExpenses, newItem]))
  }

//Delete item
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key);
}