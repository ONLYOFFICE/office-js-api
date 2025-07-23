// This example shows how to return the smallest number in a set of values. Ignores logical values and text.

// How to get a minimum number from a list of numbers.

// Use a function to find a minimum from a list.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let min = func.MIN(123, 197, 46, 345, 67, 456);
worksheet.GetRange("C1").SetValue(min);
