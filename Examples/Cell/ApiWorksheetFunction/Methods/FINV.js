// Calculate the inverse of an F probability distribution in a spreadsheet.

// How do I work backwards from a probability to find a value in a spreadsheet?

// Get the value that corresponds to a given F probability level in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FINV(0.01, 6, 4);
worksheet.GetRange("B2").SetValue(ans);