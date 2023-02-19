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