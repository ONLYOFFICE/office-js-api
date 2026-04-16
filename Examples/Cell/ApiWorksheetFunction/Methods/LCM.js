// Return the least common multiple in a spreadsheet.

// How to find the least common multiple from the list of numbers in a spreadsheet.

// Use a function to find out the least common multiple in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LCM(4, 6, 8, 8, 12, 24, 2, 1));