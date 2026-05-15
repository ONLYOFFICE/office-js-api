// Calculate the principal payment in a loan or investment in a spreadsheet.

// What portion of a regular payment goes toward the principal in a spreadsheet?

// Determine the principal portion of a payment for a specific period in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PPMT(0.1/12, 1, 2*12, 2000, 0));