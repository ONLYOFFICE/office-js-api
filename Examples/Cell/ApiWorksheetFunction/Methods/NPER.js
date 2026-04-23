// Calculate how many payment periods are needed to reach a savings goal in a spreadsheet.

// How do I find the number of periods needed for an investment in a spreadsheet?

// Determine the time required to pay off a loan or reach an investment target in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NPER(0.1/12, -500, 10000, 0));