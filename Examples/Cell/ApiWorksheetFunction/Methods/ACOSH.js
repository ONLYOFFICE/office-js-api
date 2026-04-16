// Return the inverse hyperbolic cosine of a number in a spreadsheet.

// How to get an inverse hyperbolic cosine of a number and display it in the worksheet.

// Get a function that gets inverse hyperbolic cosine of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOSH(3.25));