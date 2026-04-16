// Remove all spaces from a text string except for single spaces between words in a spreadsheet.

// How to delete unneccessary spaces from the text in a spreadsheet.

// Use a function to clear spaces from a string in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TRIM("  Online Office"));