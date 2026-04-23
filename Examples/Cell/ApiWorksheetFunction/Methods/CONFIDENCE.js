// Find the confidence interval for an average using normal distribution in a spreadsheet.

// What range of values likely contains the true average in a spreadsheet?

// Calculate the margin of error around an average estimate in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CONFIDENCE(0.5, 57, 8);
worksheet.GetRange("B2").SetValue(ans);