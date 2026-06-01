// Format a number to a fixed number of decimal places in a spreadsheet.

// How do I display a number with a specific number of decimals in a spreadsheet?

// Round and format a number as text with optional thousand separators in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FIXED(1234.9, 1, false));