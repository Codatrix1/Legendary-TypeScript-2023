//----------------------------
// When to use annotations
//-----------------------------

// CASE 1) Function that returns "any" type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates); // {x: 10, y: 20}

// CASE 2) When we declare a variable on one line
// and initialize it later
let words = ["red", "blue", "green"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "red") {
    foundWord = true;
  }
}

// CASE 3) Variables whose type cannot be inferred correctly
let numbers = [-10, -17, 20];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbers[i];
  }
}
