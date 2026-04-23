// Determine the range of accuracy for an estimated average in a spreadsheet.

// What uncertainty level should you expect around your average in a spreadsheet?

// Measure how confident you can be in your average calculation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CONFIDENCE_NORM(0.5, 57, 8);
worksheet.GetRange("B2").SetValue(ans);