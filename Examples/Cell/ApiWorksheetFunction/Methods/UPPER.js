// Convert a text string to all uppercase letters in a spreadsheet.

// How to make a string characters uppercase in a spreadsheet.

// Use a function to convert all letters to uppercase in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.UPPER("Online Office"));