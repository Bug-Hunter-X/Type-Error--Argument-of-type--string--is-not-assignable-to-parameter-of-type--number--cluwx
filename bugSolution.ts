function add(a: number, b: number): number {
  return a + b;
}

const result1 = add(1, 2); // Correct usage: No error

const num1 = 1;
const num2 = parseInt('2', 10);
const result2 = add(num1, num2); // Correct usage after type conversion

const result3 = add(1, Number('2'));// Correct usage after type assertion