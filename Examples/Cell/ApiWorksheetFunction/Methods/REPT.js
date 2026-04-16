// Repeat text a given number of times. Use this function to fill a cell with a number of instances of a text string in a spreadsheet.

// How to create an indicated number of copies in a spreadsheet.

// Use a function to repeat a text n times in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.REPT("Text", 3));