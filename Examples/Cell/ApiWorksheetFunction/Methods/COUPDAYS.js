// Return the number of days in the coupon period that contains the settlement date in a spreadsheet.

// How to find the the number of days in the coupon period that contains the settlement date in a spreadsheet.

// Use function to get the number of days in the coupon period that contains the settlement date in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COUPDAYS("1/10/2018", "6/15/2019", 4, 1));