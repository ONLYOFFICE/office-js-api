// Return a number rounded to the desired multiple in a spreadsheet.

// How to round the number in a spreadsheet.

// Use a function to round the number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MROUND(14.35, 0.4));