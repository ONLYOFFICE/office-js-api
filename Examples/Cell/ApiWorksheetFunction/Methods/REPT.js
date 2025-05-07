// This example shows how to repeat text a given number of times. Use this function to fill a cell with a number of instances of a text string.

// How to create an indicated number of copies.

// Use a function to repeat a text n times.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.REPT("Text", 3));