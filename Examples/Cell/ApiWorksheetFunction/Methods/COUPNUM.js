// Return the number of coupons payable between the settlement date and maturity date in a spreadsheet.

// How to find the number of coupons payable between the settlement date and maturity date in a spreadsheet.

// Use function to get the number of coupons payable between the settlement date and maturity date in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COUPNUM("1/10/2018", "6/15/2019", 4, 1));