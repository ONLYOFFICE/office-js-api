// This example shows how to convert a value to text in a specific number format.

// How to convert a value to text.

// Use a function to convert a value to text.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.TEXT(45.5, "$0.00"));