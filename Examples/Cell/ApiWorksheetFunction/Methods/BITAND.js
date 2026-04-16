// Return a bitwise "AND" of two numbers in a spreadsheet.

// How to get a two numbers bitwise AND in a spreadsheet.

// Use function to calculate bitwise AND opertation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITAND(13, 25));