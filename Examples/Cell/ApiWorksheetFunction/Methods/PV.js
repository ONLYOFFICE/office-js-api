// Return the present value of an investment: the total amount that a series of future payments is worth now in a spreadsheet.

// How to get the present value of an investment in a spreadsheet.

// Use a function to calculate the total amount that a series of future payments is worth now in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PV(0.1/12, 2*12, -500, 0));