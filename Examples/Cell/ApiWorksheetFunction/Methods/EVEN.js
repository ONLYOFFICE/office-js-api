// This example shows how to round a positive number up and negative number down to the nearest even integer.

// How to round up a number.

// Use function to round up positive/negative numbers.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.EVEN(15.67));