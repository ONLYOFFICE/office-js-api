// This example shows how to truncate a number to an integer by removing the decimal, or fractional, part of the number.

// How to truncate a number to an integer.

// Use a function to truncate a number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.TRUNC(3.14159265, 5));