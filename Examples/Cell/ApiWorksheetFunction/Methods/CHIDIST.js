// Find what percentage of results fall beyond a certain point in a chi-squared distribution in a spreadsheet.

// Determine the upper tail probability for a chi-squared value and degrees of freedom in a spreadsheet.

// Use statistical testing to assess whether observed values are extreme or typical in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let avg = func.CHIDIST(12, 10);
worksheet.GetRange("B2").SetValue(avg);