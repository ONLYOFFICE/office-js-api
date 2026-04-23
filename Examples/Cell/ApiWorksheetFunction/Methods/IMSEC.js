// Calculate the secant of a complex number in a spreadsheet.

// How do I find the secant value of a complex number in a spreadsheet?

// Get the secant result for complex number trigonometric operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSEC("-2+2.5i"));