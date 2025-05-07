// This example shows how to return the number of coupons payable between the settlement date and maturity date.

// How to find the number of coupons payable between the settlement date and maturity date.

// Use function to get the number of coupons payable between the settlement date and maturity date.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.COUPNUM("1/10/2018", "6/15/2019", 4, 1));