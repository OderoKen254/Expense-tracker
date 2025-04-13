import React from 'react';

function ExpenseTable({ expenses, onDelete, onSort }) {
  const handleSort = (key) => {
    onSort(key);
  };


  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
  };

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>Name</th>
          <th onClick={() => handleSort('amount')}>Amount per Item</th>
          <th onClick={() => handleSort('description')}>Description</th>
          <th onClick={() => handleSort('category')}>Category</th>
          <th onClick={() => handleSort('dateAdded')}>Date Added</th> 
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
            <td>{formatDateTime(expense.dateAdded)}</td> 
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