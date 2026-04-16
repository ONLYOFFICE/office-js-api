// Return a number shifted right by the specified number of bits in a spreadsheet.

// How to get a result from bits right shift in a spreadsheet.

// Use function to calculate bitwise right shift operation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITRSHIFT(13, 2));