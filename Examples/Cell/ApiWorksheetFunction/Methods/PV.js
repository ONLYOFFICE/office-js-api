// Calculate the present value of a series of future payments in a spreadsheet.

// What is an investment worth today given future payment amounts in a spreadsheet?

// Determine the lump sum needed now for a stream of future payments in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PV(0.1/12, 2*12, -500, 0));