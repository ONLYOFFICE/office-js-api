// Convert a number into a text representation with the given radix (base) in a spreadsheet.

// How to convert a number into text in a spreadsheet.

// Use function to get a text from a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BASE(5, 2, 5));