// Return the true logical value in a spreadsheet.

// How to get a true value in a spreadsheet.

// Use a function to return true value in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let logical1 = 1 > 0;
let logical2 = 2 > 0;

let func = Api.WorksheetFunction;
let ans = func.XOR(logical1, logical2); //Works on XOR gate logic

worksheet.GetRange("C1").SetValue(ans);