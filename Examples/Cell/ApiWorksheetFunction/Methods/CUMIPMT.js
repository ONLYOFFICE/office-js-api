// Sum up the interest payments across a loan period range in a spreadsheet.

// What is the total interest paid during a specific loan period in a spreadsheet?

// Calculate the accumulated interest between payment periods in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CUMIPMT(0.1/12, 2*12, 2000, 1, 24, 0));