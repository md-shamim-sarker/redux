# Action Payloads & Creators
## Why we need Action Creators

## index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
</head>
<body>
    <div>
        <div id="counter"></div>
        <button id="increment">Increment</button>
        <button id="decrement">Decrement</button>
    </div>
    <script src="./script.js"></script>
</body>
</html>
```
## script.js
```js
// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// action identifiers
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

// action creator
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value
    };
};

const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value
    };
};

// initial state
const initialState = {
    value: 0
};

// create reducer function
function counterReducer(state = initialState, action) {
    if(action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload
        };
    } else if(action.type === DECREMENT) {
        if(state.value > 0) {
            return {
                ...state,
                value: state.value - action.payload
            };
        } else {
            return {
                ...state,
                value: 0
            };
        }

    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer);

// button click listeners
incrementEl.addEventListener("click", () => {
    store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(5));
});

// render and subscribe
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

render();

store.subscribe(render);
```