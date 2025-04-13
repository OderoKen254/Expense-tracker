import React from 'react';

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
