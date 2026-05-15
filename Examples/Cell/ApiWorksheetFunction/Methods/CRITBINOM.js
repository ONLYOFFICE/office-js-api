// Find the smallest number that meets your probability threshold in a spreadsheet.

// What is the minimum value where cumulative probability exceeds your target in a spreadsheet?

// Identify the threshold value for a binomial distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CRITBINOM(678, 0.1, 0.007);
worksheet.GetRange("B2").SetValue(ans);