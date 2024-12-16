const expression = "9+3";
const evaluate = new Function(`return ${expression};`);
const result = evaluate();
console.log(result); // Output: -13
