// Find the minimum successes required to reach a target probability in a spreadsheet.

// What is the smallest count of wins needed to hit a certain probability level in a spreadsheet?

// Determine how many successful outcomes satisfy a probability target in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.BINOM_INV(678, 0.1, 0.007);
worksheet.GetRange("B2").SetValue(ans);