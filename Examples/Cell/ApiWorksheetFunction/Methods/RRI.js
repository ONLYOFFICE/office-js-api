// Return an equivalent interest rate for the growth of an investment in a spreadsheet.

// How to get an investment growth interest rate in a spreadsheet.

// Use a function to an equivalent interest rate for the increase of an investment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RRI(12, 10000, 20000));