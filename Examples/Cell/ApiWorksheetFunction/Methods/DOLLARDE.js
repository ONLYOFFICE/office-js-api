// Convert a dollar price, expressed as a fraction, into a dollar price, expressed as a decimal number in a spreadsheet.

// How to convert a dollar price from farction to decimal in a spreadsheet.

// Use function to get decimal from fraction price in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLARDE(1.03, 16));