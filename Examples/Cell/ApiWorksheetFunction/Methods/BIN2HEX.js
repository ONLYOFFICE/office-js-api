// Transform binary notation into hexadecimal format in a spreadsheet.

// How do I change a binary code into hex notation for programming use in a spreadsheet?

// Translate base-2 values to base-16 notation for computer system operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BIN2HEX(1110011100, 4));