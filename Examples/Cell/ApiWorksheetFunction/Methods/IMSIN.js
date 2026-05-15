// Calculate the sine of a complex number in a spreadsheet.

// How do I find the sine value of a complex number in a spreadsheet?

// Get the sine result for complex number trigonometric operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSIN("-2+2.5i"));