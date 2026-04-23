// Calculate the arccotangent of a number in radians in a spreadsheet.

// Get the inverse cotangent value using a trigonometric function in a spreadsheet.

// Place the arccotangent result into a cell for reference in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOT(0));