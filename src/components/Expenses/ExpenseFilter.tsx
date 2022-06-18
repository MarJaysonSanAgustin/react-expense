import React from 'react';
import './ExpenseFilter.css';

export interface ExpenseFilterProps {
  onFilterChange: Function,
  selectedFilter: string,
};

const ExpensesFilter = ({ onFilterChange, selectedFilter }: ExpenseFilterProps) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => onFilterChange(event.target.value);

  const yearFilterOptions = ['2019', '2020', '2021', '2022'];

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selectedFilter} onChange={handleSelectChange}>
          {yearFilterOptions.map((yearFilterOption, index) => <option key={index} value={yearFilterOption}>{yearFilterOption}</option>)}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
