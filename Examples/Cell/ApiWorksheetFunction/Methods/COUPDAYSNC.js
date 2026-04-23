// Calculate days remaining until the next coupon payment in a spreadsheet.

// What is the time until the upcoming coupon payment from today in a spreadsheet?

// Determine the gap between settlement and the next coupon maturity in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COUPDAYSNC("1/10/2018", "6/15/2019", 4, 1));