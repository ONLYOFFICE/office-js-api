// Find the date of the next coupon payment in a spreadsheet.

// What is the upcoming coupon maturity after settlement in a spreadsheet?

// Identify when your next coupon interest becomes payable in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COUPNCD("1/10/2018", "6/15/2019", 4, 1));