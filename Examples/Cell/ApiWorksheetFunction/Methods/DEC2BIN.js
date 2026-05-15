// Convert numbers from base 10 to base 2 format in a spreadsheet.

// What is a decimal number expressed as binary in a spreadsheet?

// Transform your decimal numbers into their binary equivalents in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DEC2BIN(-100));