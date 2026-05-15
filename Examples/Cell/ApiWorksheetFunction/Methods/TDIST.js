// Return the Student's t-distribution in a spreadsheet.

// Calculate the probability for the t-distribution with given degrees of freedom.

// Apply the TDIST function with t-value and degrees of freedom parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.TDIST(1.5, 10, 1);
worksheet.GetRange("B2").SetValue(ans);
