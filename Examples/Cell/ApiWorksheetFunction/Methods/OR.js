// Test whether at least one condition is true in a spreadsheet.

// How do I check if any value meets a condition in a spreadsheet?

// Return false only when all conditions are false in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue(12);

let logical1 = worksheet.GetRange("A1") < 10;
let logical2 = 34 < 10;
let logical3 = 50 < 10;

let func = Api.WorksheetFunction;
let ans = func.OR(logical1, logical2, logical3);
worksheet.GetRange("C1").SetValue(ans);