// Find the confidence interval for an average using t distribution in a spreadsheet.

// What is the reliable range around your estimate in a spreadsheet?

// Assess the accuracy of your average with statistical confidence in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CONFIDENCE_T(0.5, 57, 8);
worksheet.GetRange("B2").SetValue(ans);