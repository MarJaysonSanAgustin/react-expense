import { ExpenseItemProps } from '../Expenses/ExpenseItem';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export interface NewExpenseProps {
  onSaveExpense: Function,
}

const NewExpense = ({ onSaveExpense }: NewExpenseProps) => {
  const onAddExpense = (expense: ExpenseItemProps) => onSaveExpense(expense);
  return (
    <div className='new-expense'>
      <ExpenseForm onAddExpense={onAddExpense} />
    </div>
  )
}

export default NewExpense;
