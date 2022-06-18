import ExpenseItem, { ExpenseItemProps } from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

export interface ExpensesProps {
  expenses: ExpenseItemProps[];
}
const Expenses = ({ expenses }: ExpensesProps) => {
  return (
    <Card>
      <div className="expenses">
        {expenses?.map(expense => <ExpenseItem {...expense} />)}
      </div>
    </Card>
  )
};

export default Expenses;
