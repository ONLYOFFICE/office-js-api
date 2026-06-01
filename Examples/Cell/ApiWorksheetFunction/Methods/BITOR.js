// Combine two numbers using bitwise OR in a spreadsheet.

// Which bits are set in either number in a spreadsheet?

// Merge binary values to include all active bits in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITOR(23, 10));