// Calculate the least common multiple of integers in a spreadsheet.

// How do I find the smallest number that all values divide evenly into in a spreadsheet?

// Get the least common multiple for use in fraction operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LCM(4, 6, 8, 8, 12, 24, 2, 1));