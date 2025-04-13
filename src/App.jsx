
import { useState } from 'react';
import ExpenseTable from './Components/ExpenseTable.jsx';
import ExpenseForm from './Components/ExpenseForm.jsx';
import SearchBar from './Components/SearchBar.jsx';
import './App.css';


function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Adding new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  // Deleting expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  // Handling search
  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle sorting
  const sortExpenses = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    const sortedExpenses = [...filteredExpenses].sort((a, b) => {
      // Handle numeric sorting for amount
      if (key === 'amount') {
        return direction === 'asc' ? a[key] - b[key] : b[key] - a[key];
      }
      // Handle date sorting for dateAdded
      if (key === 'dateAdded') {
        const dateA = new Date(a[key]);
        const dateB = new Date(b[key]);
        return direction === 'asc' ? dateA - dateB : dateB - dateA;
      }
      // Handle string sorting for other fields (name, description, category)
      const valueA = a[key] ? a[key].toLowerCase() : ''; // Case-insensitive sorting
      const valueB = b[key] ? b[key].toLowerCase() : '';
      if (valueA < valueB) return direction === 'asc' ? -1 : 1;
      if (valueA > valueB) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    return sortedExpenses;
  };

  const displayedExpenses = sortConfig.key ? sortExpenses(sortConfig.key) : filteredExpenses;

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <div className="layout-container">
        <div className="form-container">
          <ExpenseForm onAddExpense={addExpense} />
        </div>
        <div className="table-container">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ExpenseTable
            expenses={displayedExpenses}
            onDelete={deleteExpense}
            onSort={sortExpenses}
            sortConfig={sortConfig}
          />
        </div>
      </div>
    </div>
  );
}

export default App;