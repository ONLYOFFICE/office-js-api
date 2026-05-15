// Find the value that corresponds to a given probability in a gamma distribution in a spreadsheet.

// How do I calculate the inverse of a gamma cumulative distribution in a spreadsheet?

// Get the x-value for a probability point in a gamma distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAMMA_INV(0.4, 9, 2);
worksheet.GetRange("B2").SetValue(ans);
