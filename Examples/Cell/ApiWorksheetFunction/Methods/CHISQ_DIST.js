// Get the cumulative percentage of results up to a specific point in a chi-squared distribution in a spreadsheet.

// Determine what portion of the distribution falls at or below a given value in a spreadsheet.

// Evaluate how likely it is to see results less than or equal to an observed chi-squared value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHISQ_DIST(2, 3, false));