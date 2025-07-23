// This example shows how to return the remainder after a number is divided by a divisor.

// How to get the modulo from the division.

// Use a function to calculate the remainder from the division operation.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MOD(65, 7));