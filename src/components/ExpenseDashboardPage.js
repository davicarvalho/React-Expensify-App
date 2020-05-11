import React from 'react';
import ExpneseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilter />
    <ExpneseList />
  </div>
);

export default ExpenseDashboardPage;
