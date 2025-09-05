import React, { useState } from 'react';
import Counter from './components/Counter';
const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <Counter count={count} increment={increment} />
    </div>
  );
};
export default App;
