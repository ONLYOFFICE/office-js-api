// Calculate the interest rate from an investment's growth in a spreadsheet.

// How do I find the interest rate when I know the investment's start and end value in a spreadsheet?

// Determine the annual growth rate from investment performance data in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RRI(12, 10000, 20000));