// select dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state
const initialState = {
    value: 0
};

// create reducer function
function counterReducer(state = initialState, action) {
    if(action.type === "increment") {
        return {
            ...state,
            value: state.value + 1
        };
    } else if(action.type === "decrement") {
        if(state.value > 0) {
            return {
                ...state,
                value: state.value - 1
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
// eslint-disable-next-line no-undef
const store = Redux.createStore(counterReducer);

// button click listeners
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

// render and subscribe
const render = () => {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
};

render();

store.subscribe(render);
