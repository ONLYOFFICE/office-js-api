// Round numbers up to the nearest increment in a spreadsheet.

// What is the next whole value above a decimal in a spreadsheet?

// Force rounding upward to meet a specific interval in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CEILING(1.23, 0.1));