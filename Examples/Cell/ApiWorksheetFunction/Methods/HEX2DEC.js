// Convert a hexadecimal number to decimal in a spreadsheet.

// How do I convert hexadecimal values to decimal numbers in a spreadsheet?

// Transform a hex value into its decimal equivalent in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HEX2DEC("FFFFFFFF9C"));