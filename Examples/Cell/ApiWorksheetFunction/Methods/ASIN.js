// Calculate the arcsine of a number and return the result in radians in a spreadsheet.

// Find the inverse sine using the ASIN function in a spreadsheet.

// Determine the angle value from a sine number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASIN(0.25));