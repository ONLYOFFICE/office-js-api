// Convert a hexadecimal number to octal in a spreadsheet.

// How do I convert hexadecimal values to octal format in a spreadsheet?

// Transform a hex value into its octal representation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HEX2OCT("FFFFFFFF9C"));