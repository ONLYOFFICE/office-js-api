// Perform an exclusive OR operation on multiple logical values in a spreadsheet.

// How do I test whether an odd number of conditions are true in a spreadsheet?

// Determine if exactly one or an odd number of values are true in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let logical1 = 1 > 0;
let logical2 = 2 < 0;
let func = Api.WorksheetFunction;
let ans = func.XOR(logical1, logical2);
worksheet.GetRange("C1").SetValue(ans);