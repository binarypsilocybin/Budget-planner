import React from 'react';

const ExpenseList = () => {
  const expenses = [
    { id: 1231232, name: 'Shopping', cost: 50 },
    { id: 1231232, name: 'Holiday', cost: 100 },
    { id: 1231232, name: 'Transportation', cost: 60 },
    { id: 1231232, name: 'Fuel', cost: 75 },
    { id: 1231232, name: 'Child Care', cost: 500 },
  ];

  return (
    <ul>
      {expenses.map((expense) => {
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />;
      })}
    </ul>
  );
};

export default ExpenseList;
