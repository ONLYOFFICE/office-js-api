// Return a bitwise "XOR" of two numbers in a spreadsheet.

// How to get a result from XOR operation in a spreadsheet.

// Use function to calculate bitwise "XOR" operation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITXOR(5, 3));