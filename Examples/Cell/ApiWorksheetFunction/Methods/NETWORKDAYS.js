// Count working days between two dates in a spreadsheet.

// Calculate business days, excluding weekends in a spreadsheet.

// Determine workdays for project scheduling in a spreadsheet.

const worksheet = Api.GetActiveSheet();

let func = Api.WorksheetFunction;
let ans = func.NETWORKDAYS("3/16/2018", "12/31/2018"); 

worksheet.GetRange("C1").SetValue(ans);