// Convert a hexadecimal number to binary in a spreadsheet.

// How do I convert hexadecimal values to binary format in a spreadsheet?

// Transform a hex value into its binary representation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HEX2BIN("FFFFFFFF9C"));