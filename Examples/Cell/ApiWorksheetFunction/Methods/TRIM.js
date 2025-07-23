// This example shows how to remove all spaces from a text string except for single spaces between words.

// How to delete unneccessary spaces from the text.

// Use a function to clear spaces from a string.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TRIM("  Online Office"));