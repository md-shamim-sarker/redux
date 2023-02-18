# React UI & Reusability
## With React State Management & Components

# What we have learned so far
- Our application had 3 parts - view, action and state
- State is the source of truth that drives our app
- View is the declarative description of the UI based on the current state
- Actions are the events that occur in the app based on user input and trigger updates in the state
- This is called one-way data flow

## App.js
```js
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
```

## Counter.js
```js
import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    return (
        <div className="max-w-md mx-auto mt-10 space-y-5">
            <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <div className="text-2xl font-semibold">{count}</div>
                <div className="flex space-x-3">
                    <button className="bg-indigo-400 text-white px-3 py-2 rounded shadow" onClick={increment}>
                        Increment
                    </button>
                    <button className="bg-red-400 text-white px-3 py-2 rounded shadow" onClick={decrement}>
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
```