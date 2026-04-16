// Convert a binary number to octal in a spreadsheet.

// How to get an octal representation of a binary number.

// Use function to convert a binary to octal in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BIN2OCT(1110011100, 4));