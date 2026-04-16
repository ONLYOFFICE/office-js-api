// Return the sum of a power series based on the formula in a spreadsheet.

// How to calculate the sum of a power series in a spreadsheet.

// Use a function to sum up a power series using a formula.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SERIESSUM(5, 2, 1, 3));