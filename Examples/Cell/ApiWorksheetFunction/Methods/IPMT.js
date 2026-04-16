// Return the interest payment for a given period for an investment, based on periodic, constant payments and a constant interest rate in a spreadsheet.

// How to calculate the interest payment for a given period for an investment in a spreadsheet.

// Use a function to get the interest payment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IPMT(0.1/12, 1, 2*12, 2000, 0));