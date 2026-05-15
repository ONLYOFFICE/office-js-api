// Select one value from a list by specifying its position number in a spreadsheet.

// Return the item at a specific index from a collection of values in a spreadsheet.

// Use an index to access a particular entry in your choice options in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHOOSE(2, 3, 4, 89, 76, 0));