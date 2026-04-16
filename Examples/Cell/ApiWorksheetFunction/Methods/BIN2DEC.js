// Convert a binary number to decimal in a spreadsheet.

// How to get a decimal representation of a binary number.

// Use function to convert a binary to decimal in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BIN2DEC(1110011100));