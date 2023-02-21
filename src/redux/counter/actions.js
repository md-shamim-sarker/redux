import {DECREMENT, INCREMENT} from "./actionTypes";

export const increment = () => {
    return {
        type: INCREMENT,
    };
};

export const decrement = () => {
    return {
        type: DECREMENT,
    };
};