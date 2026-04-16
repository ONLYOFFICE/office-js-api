// Return the next coupon date after the settlement date in a spreadsheet.

// How to find the next coupon date in a spreadsheet.

// Use function to get the next coupon date after the settlement date in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COUPNCD("1/10/2018", "6/15/2019", 4, 1));