// Find the last coupon payment date before a bond settles in a spreadsheet.

// What was the previous coupon date in a spreadsheet?

// Calculate the coupon period date that comes before settlement in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COUPPCD("1/10/2018", "6/15/2019", 4, 1));