// Calculate days elapsed since the coupon period began in a spreadsheet.

// What is the interval from the start of coupon to settlement in a spreadsheet?

// Determine the duration between coupon inception and transaction date in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COUPDAYBS("1/10/2018", "6/15/2019", 4, 1));