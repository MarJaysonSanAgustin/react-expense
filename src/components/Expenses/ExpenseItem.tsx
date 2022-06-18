import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

export interface ExpenseItemProps {
  id: string | number;
  date: number | string;
  title: string;
  price: number | null;
}

const ExpenseItem = ({ date, title, price }: ExpenseItemProps) => {
  const formattedDate = new Date(date);
  return (
    <div className='expense-item'>
      <ExpenseDate date={formattedDate} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>Php {price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
