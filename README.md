# React State Management issues
## Why we need a separate State Management Library

## App.js
```js
import React, {useState} from 'react';
import Counter from './components/Counter';
import Stats from './components/Stats';

const initialState = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 0
  }
];

const App = () => {
  const [state, setState] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };

  const increment = (id) => {
    const updatedCounter = state.map((c) => {
      if(c.id === id) {
        return {
          ...c,
          count: c.count + 1
        };
      }
      return {...c};
    });
    setState(updatedCounter);
  };

  const decrement = (id) => {
    const updatedCounter = state.map((c) => {
      if(c.id === id) {
        return {
          ...c,
          count: c.count - 1
        };
      }
      return {...c};
    });
    setState(updatedCounter);
  };

  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      {/* header */}
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      {/* counters */}
      {
        state.map((count) => (
          <Counter
            key={count.id}
            id={count.id}
            count={count.count}
            increment={increment}
            decrement={decrement}
          ></Counter>
        ))
      }
      <Stats count={totalCount()}></Stats>
    </div>
  );
};

export default App;
```

## Counter.js
```js
import React from 'react';
import Count from './Count';

const Counter = ({id, count, increment, decrement}) => {

    return (
        <div className="max-w-md mx-auto mt-10 space-y-5">
            <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <Count count={count}></Count>
                <div className="flex space-x-3">
                    <button className="bg-indigo-400 text-white px-3 py-2 rounded shadow" onClick={() => increment(id)}>
                        Increment
                    </button>
                    <button className="bg-red-400 text-white px-3 py-2 rounded shadow" onClick={() => decrement(id)}>
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
```

## Count.js
```js
import React from 'react';

const Count = ({count}) => {
    return (
        <div class="text-2xl font-semibold">
            {count}
        </div>
    );
};

export default Count;
```

## Button.js
```js
import React from 'react';

const Button = ({children, handler}) => {
    return (
        <button
            class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={handler}
        >
            {children}
        </button>
    );
};

export default Button;
```

## Stats.js
```js
import React from 'react';

const Stats = ({count}) => {
    return (
        <div className="max-w-md mx-auto mt-10 space-y-5">
            <div className="p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <div className="text-2xl font-semibold">Total count: {count}</div>
            </div>
        </div>
    );
};

export default Stats;
```