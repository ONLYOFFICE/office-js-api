// Calculate the interest payment for a specific period of a loan in a spreadsheet.

// How do I find the interest amount for a particular payment period in a spreadsheet?

// Use a function to break down loan payments into principal and interest components in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISPMT(0.1/12, 1, 2*12, 2000));