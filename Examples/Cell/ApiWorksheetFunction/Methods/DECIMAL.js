// Convert a text representation of a number in a given base into a decimal number in a spreadsheet.

// How to get a decimal value from a text in a spreadsheet.

// Use function to convert a text value to decimal using base in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DECIMAL(101, 2));