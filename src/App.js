import React, { useState } from 'react';
import AppContext from './Context';
import Counter from './Counter';

function App() {
  const [ total, setTotal ] = useState(0);
 
  return (
    <div> 
      APP: {total}
      <AppContext.Provider value={[total, setTotal]}>
        <Counter />
        <button type="button" onClick={() => setTotal(total+1)}>setTotal + 1</button>
      </AppContext.Provider>
    </div>
  );
}

export default App;
