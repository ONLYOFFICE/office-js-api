// This example shows how to convert a number into a text representation with the given radix (base).

// How to convert a number into text.

// Use function to get a text from a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BASE(5, 2, 5));