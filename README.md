# TypeScript Type Error: Argument of type 'string' is not assignable to parameter of type 'number'

This repository demonstrates a common TypeScript type error and its solution. The error occurs when a function expecting a numeric argument receives a string argument instead.

## Bug

The `add` function is defined to accept two numeric arguments and return their sum. However, the code calls this function with a string argument, resulting in a type error.

## Solution

The solution involves type checking to ensure the arguments passed to the `add` function are indeed numbers.  Type assertion or explicit type conversion can handle this. 