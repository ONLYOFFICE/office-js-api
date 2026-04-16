// Convert all letters in a text string to lowercase in a spreadsheet.

// How to make all characters uncapitalized in a spreadsheet.

// Use a function to make a text string to lowercase in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOWER("Day"));