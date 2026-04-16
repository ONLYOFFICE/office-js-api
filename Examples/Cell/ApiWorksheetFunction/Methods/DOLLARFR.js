// Convert a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction in a spreadsheet.

// How to convert a dollar price from decimal to fraction in a spreadsheet.

// Use function to get fraction from decimal price in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLARFR(1.1875, 16));