// This example shows how to return the next coupon date after the settlement date.

// How to find the next coupon date.

// Use function to get the next coupon date after the settlement date.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.COUPNCD("1/10/2018", "6/15/2019", 4, 1));