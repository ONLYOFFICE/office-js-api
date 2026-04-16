// Convert a text string to proper case: the first letter in each word to uppercase, and all other letters to lowercase in a spreadsheet.

// How to make each word's first letter uppercase in a spreadsheet.

// Use a function to make proper casing for all text strings in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PROPER("dAVID CONNOR"));