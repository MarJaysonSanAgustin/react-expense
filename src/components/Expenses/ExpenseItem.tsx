import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

export interface ExpenseItemProps {
  date: Date;
  title: string;
  price: number;
}

const ExpenseItem = ({ date, title, price }: ExpenseItemProps) => {


  return (
    <div className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>Php {price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
