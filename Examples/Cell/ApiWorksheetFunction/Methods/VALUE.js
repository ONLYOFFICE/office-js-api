// Convert a text string that represents a number to a number in a spreadsheet.

// How to get number from a text in a spreadsheet.

// Use a function to return a number from a string in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.VALUE("$3.50"));