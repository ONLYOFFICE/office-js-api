// Transform binary notation into standard decimal numbers in a spreadsheet.

// How do I change a binary code into the regular number system in a spreadsheet?

// Translate base-2 values to base-10 format for everyday calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BIN2DEC(1110011100));