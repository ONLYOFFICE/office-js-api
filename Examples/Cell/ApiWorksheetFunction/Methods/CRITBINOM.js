// Return the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value in a spreadsheet.

// How to return the minimum value for which the cumulative binomial distribution >= criterion value in a spreadsheet.

// Use function to the minimum value for which the cumulative binomial distribution >= criterion value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CRITBINOM(678, 0.1, 0.007);
worksheet.GetRange("B2").SetValue(ans);