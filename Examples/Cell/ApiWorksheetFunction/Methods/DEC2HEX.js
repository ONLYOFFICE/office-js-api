// Convert numbers from base 10 to base 16 format in a spreadsheet.

// What is a decimal number expressed as hexadecimal in a spreadsheet?

// Transform your decimal numbers into their hexadecimal equivalents in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DEC2HEX(-100));