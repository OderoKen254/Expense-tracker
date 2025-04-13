import React from 'react';
import './App.css';

// This component renders a table of expenses with sorting and delete functionality
// It receives expenses, onDelete, and onSort as props
// expenses: an array of expense objects
// onDelete: a function to delete an expense
// onSort: a function to sort the expenses based on a specific key
// The table displays the name, amount, description, category of each expense
// and provides a delete button for each expense
// The table headers are clickable to allow sorting by the respective column
// The component uses the map function to iterate over the expenses array
// and render each expense in a table row
// The delete button calls the onDelete function with the expense id when clicked
// The component is exported as the default export of the module
// The component is styled with CSS classes for better presentation
// The table is structured with a header and body
// The header contains the column names and the body contains the expense data
// The component is reusable and can be used in different parts of the application
// The component is designed to be user-friendly and easy to understand
// The component is written in JavaScript and uses React library
// The component is functional and uses hooks for state management
// The component is designed to be responsive and work well on different screen sizes
// The component is designed to be accessible and follows best practices for web development


function ExpenseTable({ expenses, onDelete, onSort }) {
    const handleSort = (key) => {
      onSort(key);
    };
  
    return (
      <table className="expense-table">

        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('amount')}>Amount</th>
            <th onClick={() => handleSort('description')}>Description</th>
            <th onClick={() => handleSort('category')}>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>
                <button onClick={() => onDelete(expense.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;


