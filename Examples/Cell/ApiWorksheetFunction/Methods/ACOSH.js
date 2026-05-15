// Find the inverse hyperbolic cosine of a number in a spreadsheet.

// Apply the ACOSH function to get the inverse hyperbolic cosine in a spreadsheet.

// Store the calculated inverse hyperbolic cosine value in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOSH(3.25));