// Return the number of days from the beginning of the coupon period to the settlement date in a spreadsheet.

// How to find the number of days from the beginning of the coupon period to the settlement date in a spreadsheet.

// Use function to get days count from the beginning of the coupon period to the settlement date in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COUPDAYBS("1/10/2018", "6/15/2019", 4, 1));