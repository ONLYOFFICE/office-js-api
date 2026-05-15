// Transform binary notation into octal format in a spreadsheet.

// How do I change a binary code into octal notation for legacy systems in a spreadsheet?

// Translate base-2 values to base-8 representation for Unix and file permissions in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BIN2OCT(1110011100, 4));