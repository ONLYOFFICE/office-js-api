// Find bits that differ between two numbers in a spreadsheet.

// Which bits are active in one number but not the other in a spreadsheet?

// Highlight the unique bits when comparing two values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITXOR(5, 3));