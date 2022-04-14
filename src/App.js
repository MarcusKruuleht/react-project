import React from 'react';
import './App.css';

import ExpenseItem from './components/Expenseitem';

const App = () => {
  return (
    <div>
      <h2>Lets go!</h2>
        <ExpenseItem />
    </div>
  );
}

export default App;
