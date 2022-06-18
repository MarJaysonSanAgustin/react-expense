
import { useState } from 'react';
import { ExpenseItemProps } from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const defaultExpenses: ExpenseItemProps[] = [
    { id: 'e1', date: new Date().toISOString().slice(0, 10), title: 'Gas', price: 100.88 },
    { id: 'e2', date: new Date().toISOString().slice(0, 10), title: 'Water', price: 400.50 },
    { id: 'e3', date: new Date().toISOString().slice(0, 10), title: 'Rent', price: 5000 },
    { id: 'e4', date: new Date().toISOString().slice(0, 10), title: 'Book Sale', price: 999.25 },
  ];
  const [expenses, setExpenses] = useState(defaultExpenses);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const [selectedYearFilter, setSelectedYearFilter] = useState('2022');

  const getYear = (date: string | number) => new Date(date).toLocaleString('en-US', { year: 'numeric' });
  const onSaveExpense = (expense: ExpenseItemProps) => {
    setExpenses((previousExpenses) => ([expense, ...previousExpenses]));
    const expenseYear = getYear(expense.date);
    if (expenseYear === selectedYearFilter) {
      setFilteredExpenses((previousFilteredExpenses) => ([expense, ...previousFilteredExpenses]));
    }
  }
  const onYearFilterChange = (yearFilter: string) => {
    setSelectedYearFilter(yearFilter);
    setFilteredExpenses(expenses?.filter(({ date }) => getYear(date) === yearFilter));
  }

  return (
    <div>
      <NewExpense onSaveExpense={onSaveExpense} />
      <Expenses expenses={filteredExpenses} onYearFilterChange={onYearFilterChange} />
    </div>
  );
}

export default App;
