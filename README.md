# Rewrite the counter application
## with vanilla Redux

# Steps for working with vanilla Redux and Vanilla JS
## Step 0: Import Redux from CDN in index.html
```html
<script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
```
## Step 1: Initial State
```js
const initialState = {
    value: 0
};
```
## Step 2: Create Reducer Function
```js
function counterReducer(state = initialState, action) {
    if(action.type === "increment") {
        return {
            ...state,
            value: state.value + 1
        };
    } else if(action.type === "decrement") {
        return {
            ...state,
            value: state.value - 1
        };
    } else {
        return state;
    }
}
```
## Step 3: create store
```js
const store = Redux.createStore(counterReducer);
```

## Step 4: button click listeners
```js
incrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "increment"
    });
});

decrementEl.addEventListener("click", () => {
    store.dispatch({
        type: "decrement"
    });
});
```

## Step 5: render and subscribe
```js
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

render();

store.subscribe(render);
```