import React from 'react';
import {Provider} from 'react-redux';
import Counter from './components/Counter';
import DynamicHooksCounter from './components/DynamicHooksCounter';
import HooksCounter from './components/HooksCounter';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        {/* header */}
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        {/* counters */}
        {/* <Counter></Counter> */}
        <HooksCounter></HooksCounter>
        <DynamicHooksCounter></DynamicHooksCounter>
      </div>
    </Provider>
  );
};

export default App;