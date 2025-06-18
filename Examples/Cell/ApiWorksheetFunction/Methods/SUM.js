// This example shows how to add all the numbers in a range of cells.

// How to sum up all values from the list.

// Use a function to estimate a sum from the cells.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.SUM(145, 37, 236, 69, 567, 92));