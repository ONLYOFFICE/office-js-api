// Get the interest payment for a specific period in a spreadsheet.

// How do I calculate the interest portion of a payment in a spreadsheet?

// Find the interest amount paid in a loan period in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IPMT(0.1/12, 1, 2*12, 2000, 0));