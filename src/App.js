import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      {/* header */}
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      {/* counters */}
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
};

export default App;