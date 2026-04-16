// Return the interest paid during a specific period of an investment in a spreadsheet.

// How to get the investment interest paid during a specific period in a spreadsheet.

// Use a function to get an interest paid during a specific period in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISPMT(0.1/12, 1, 2*12, 2000));