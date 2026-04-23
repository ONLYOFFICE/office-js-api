// Return the two-tailed inverse of the Student's t-distribution in a spreadsheet.

// Calculate the inverse t-value for a given probability and degrees of freedom.

// Apply the TINV function with probability and degrees of freedom parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.TINV(0.5, 10);
worksheet.GetRange("B2").SetValue(result);
