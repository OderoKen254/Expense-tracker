import React from 'react';

function ExpenseTable({ expenses, onDelete, onSort, sortConfig }) {
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
      hour12: true,
    });
  };

  const getSortArrow = (key) => {
    if (sortConfig?.key !== key) return '';
    return sortConfig.direction === 'asc' ? ' ↑' : ' ↓';
  };

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>
            Name {getSortArrow('name')}
          </th>
          <th onClick={() => handleSort('amount')}>
            Amount {getSortArrow('amount')}
          </th>
          <th onClick={() => handleSort('description')}>
            Description {getSortArrow('description')}
          </th>
          <th onClick={() => handleSort('category')}>
            Category {getSortArrow('category')}
          </th>
          <th onClick={() => handleSort('dateAdded')}>
            Date Added {getSortArrow('dateAdded')}
          </th>
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