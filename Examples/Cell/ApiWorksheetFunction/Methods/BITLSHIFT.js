// Return a number shifted left by the specified number of bits in a spreadsheet.

// How to get a result from bits left shift in a spreadsheet.

// Use function to calculate bitwise left shift operation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITLSHIFT(4, 2));