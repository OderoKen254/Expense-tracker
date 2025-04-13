import React from 'react';
import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    description: '',
    category: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDateTime = new Date().toISOString();
    onAddExpense({
      ...formData,
      amount: parseFloat(formData.amount),
      dateAdded: currentDateTime,
    });
    setFormData({ name: '', amount: '', description: '', category: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add New Expense</h2>  
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Expense Name"
        required
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        step="0.01"
        required
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
