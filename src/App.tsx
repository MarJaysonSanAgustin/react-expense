
import { ExpenseItemProps } from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses: ExpenseItemProps[] = [
    { date: new Date(2022, 5, 18), title: 'Gas', price: 100 },
    { date: new Date(2022, 5, 18), title: 'Water', price: 400 },
    { date: new Date(2022, 5, 18), title: 'Rent', price: 5000 },
  ];
  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
