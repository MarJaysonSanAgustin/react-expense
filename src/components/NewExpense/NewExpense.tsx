import { useState } from 'react';
import { ExpenseItemProps } from '../Expenses/ExpenseItem';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export interface NewExpenseProps {
  onSaveExpense: Function,
}

const NewExpense = ({ onSaveExpense }: NewExpenseProps) => {
  const onAddExpense = (expense: ExpenseItemProps) => onSaveExpense(expense);
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const handleAddExpenseClick = () => setShowExpenseForm(true);
  const handleExpenseFormCancel = () => setShowExpenseForm(false);

  return (
    <div className='new-expense'>
      {showExpenseForm && <ExpenseForm onAddExpense={onAddExpense} onCancel={handleExpenseFormCancel} />}
      {!showExpenseForm && <button type='button' onClick={handleAddExpenseClick}>Add Expense</button>}
    </div>
  )
}

export default NewExpense;
