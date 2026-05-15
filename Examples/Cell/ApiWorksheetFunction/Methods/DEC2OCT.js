// Convert numbers from base 10 to base 8 format in a spreadsheet.

// What is a decimal number expressed as octal in a spreadsheet?

// Transform your decimal numbers into their octal equivalents in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DEC2OCT(-100));