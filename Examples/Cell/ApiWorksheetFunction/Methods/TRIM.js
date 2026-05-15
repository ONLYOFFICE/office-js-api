// Remove extra spaces from text, keeping single spaces between words in a spreadsheet.

// How do I clean up spacing in text within a spreadsheet?

// Delete unnecessary spaces from a text string in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TRIM("  Online Office"));