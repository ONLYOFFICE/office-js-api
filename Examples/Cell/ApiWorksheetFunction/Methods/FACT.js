// This example shows how to return the factorial of a number, which is equal to 123 *...* number.

// How to calculate a number factorial.

// Use function to calculate the factorial of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FACT(123));