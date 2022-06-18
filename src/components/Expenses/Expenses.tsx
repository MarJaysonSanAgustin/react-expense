import ExpenseItem, { ExpenseItemProps } from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import './Expenses.css';
import { useState } from "react";

export interface ExpensesProps {
  expenses: ExpenseItemProps[];
  onYearFilterChange: Function;
}
const Expenses = ({ expenses, onYearFilterChange }: ExpensesProps) => {
  const [yearFilter, setYearFilter] = useState('2022');

  const onFilterChange = (yearFilter: string) => {
    onYearFilterChange(yearFilter);
    setYearFilter(yearFilter);
  }
  return (
    <Card>
      <ExpensesFilter selectedFilter={yearFilter} onFilterChange={onFilterChange} />
      <div className="expenses">
        {expenses?.length < 1 ? <p className="expenses__empty-message">No expenses found.</p> : expenses?.map(expense => <ExpenseItem key={expense.id} {...expense} />)}
      </div>
    </Card>
  )
};

export default Expenses;
