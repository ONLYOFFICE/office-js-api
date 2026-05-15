// Sum up the principal payments on a loan during a period range in a spreadsheet.

// What is the total principal paid down during a specific loan period in a spreadsheet?

// Calculate the accumulated principal reduction between payment periods in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CUMPRINC(0.1/12, 2*12, 2000, 1, 24, 0));