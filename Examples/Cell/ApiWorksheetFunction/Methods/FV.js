// Return the future value of an investment based on periodic, constant payments and a constant interest rate.

// Calculate investment growth with monthly payments over a fixed period.

// Determine total investment value using FV function with interest rate and principal.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FV(0.1/12, 2*12, -500, 10000));