// Calculate the interest rate for each payment period of a loan or investment in a spreadsheet.

// How do I determine the periodic interest rate from loan payment details in a spreadsheet?

// Find the rate applied to each period when given the total payment schedule in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RATE(2*12, -500, 10000, 0));