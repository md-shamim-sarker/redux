# Setup react-redux

## Step 0: npm install redux react-redux
## Step 1: src/redux/counter/actionTypes.js
```js
export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';
```
## Step 2: src/redux/counter/actions.js
```js
import {DECREMENT, INCREMENT} from "./actionTypes";

export const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    };
};

export const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
};
```
## Step 3: src/redux/counter/counterReducer.js
```js
import {DECREMENT, INCREMENT} from "./actionTypes";

const initialState = {
    value: 0
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            };
        default:
            return state;
    }
};

export default counterReducer;
```
## Step 4: src/redux/store.js
```js
import {createStore} from "redux";
import counterReducer from "./counter/counterReducer";

const store = createStore(counterReducer);

export default store;
```
## Step 5: src/App.js
```js
import React from 'react';
import {Provider} from 'react-redux';
import Counter from './components/Counter';
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
        <Counter></Counter>
        <Counter></Counter>
      </div>
    </Provider>
  );
};

export default App;
```