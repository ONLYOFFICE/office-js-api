// Compute the Bessel function of the first kind for a given value and order in a spreadsheet.

// Evaluate the Bessel function J at a specific order in a spreadsheet.

// Calculate an oscillatory Bessel value commonly used in signal and vibration analysis in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELJ(1.9, 2));
