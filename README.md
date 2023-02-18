# What is State Management?

## index.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simple Counter Application</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <!-- header -->
        <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
            Simple Counter Application
        </h1>

        <!-- counters -->
        <!-- counter 1 -->
        <div class="max-w-md mx-auto mt-10 space-y-5">
            <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <div class="text-2xl font-semibold" id="counter">0</div>
                <div class="flex space-x-3">
                    <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment">
                        Increment
                    </button>
                    <button class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement">
                        Decrement
                    </button>
                </div>
            </div>
        </div>

        <!-- counter 2 -->
        <div class="max-w-md mx-auto mt-10 space-y-5">
            <div class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
                <div class="text-2xl font-semibold" id="counter2">0</div>
                <div class="flex space-x-3">
                    <button class="bg-indigo-400 text-white px-3 py-2 rounded shadow" id="increment2">
                        Increment
                    </button>
                    <button class="bg-red-400 text-white px-3 py-2 rounded shadow" id="decrement2">
                        Decrement
                    </button>
                </div>
            </div>
        </div>
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

const counter2El = document.getElementById("counter2");
const increment2El = document.getElementById("increment2");
const decrement2El = document.getElementById("decrement2");

// initial state
let count = 0;

// event listeners
incrementEl.addEventListener('click', () => {
    count++;
    counterEl.innerText = count;
});

decrementEl.addEventListener('click', () => {
    count--;
    counterEl.innerText = count;
});

increment2El.addEventListener('click', () => {
    count++;
    counter2El.innerText = count;
});

decrement2El.addEventListener('click', () => {
    count--;
    counter2El.innerText = count;
});
```