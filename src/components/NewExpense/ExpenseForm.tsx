import React, { useState } from 'react';
import { ExpenseItemProps } from '../Expenses/ExpenseItem';
import './ExpenseForm.css';

export interface ExpenseFormProps {
  onAddExpense: Function,
  onCancel: Function,
}

const ExpenseForm = ({ onAddExpense, onCancel }: ExpenseFormProps) => {
  const defaultFormValue: ExpenseItemProps = {
    id: '',
    title: '',
    price: null,
    date: new Date().toISOString().slice(0, 10),
  };
  const [formValue, setFormValue] = useState(defaultFormValue);

  const changeFormValue = (key: string, value: string | number | Date) => {
    setFormValue((previousFormValue) => ({
      ...previousFormValue,
      [key]: value,
    }));
  }

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => changeFormValue('title', event.target.value);
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => changeFormValue('price', event.target.value);
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => changeFormValue('date', event.target.value);
  const handleCancelClick = () => onCancel(true);


  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onAddExpense({ ...formValue, id: Math.random().toString() });
    setFormValue(defaultFormValue);
  }

  return <form onSubmit={formSubmitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type="text" onChange={handleTitleChange} value={formValue.title} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" onChange={handleAmountChange} value={formValue?.price || ''} />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" onChange={handleDateChange} value={formValue.date} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button type='button' onClick={handleCancelClick}>Cancel</button>
      <button type='submit'>Add Expense</button>
    </div>
  </form>
};

export default ExpenseForm;
