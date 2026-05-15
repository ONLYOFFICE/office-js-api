// Calculate the arithmetic mean of a set of numbers in a spreadsheet.

// Find the average of several values in a spreadsheet.

// Add up all numbers and divide by their count to get a central value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.AVERAGE(123, 197, 46, 345, 67, 456);
worksheet.GetRange("B2").SetValue(ans);
