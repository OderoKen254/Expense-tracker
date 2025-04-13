import React, { useState } from "react";

// This component renders a form for adding new expenses
// It receives onAddExpense as a prop
// onAddExpense: a function to add a new expense in the parent component
// The component renders a form with input fields for name, amount, description, and category
// The input fields are controlled components, meaning their values are managed by React state



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
    onAddExpense({
      ...formData,
      amount: parseFloat(formData.amount),
    });
    setFormData({ name: '', amount: '', description: '', category: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
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
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
