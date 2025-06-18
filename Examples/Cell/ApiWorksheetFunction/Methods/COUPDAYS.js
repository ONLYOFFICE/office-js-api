// This example shows how to return the number of days in the coupon period that contains the settlement date.

// How to find the the number of days in the coupon period that contains the settlement date.

// Use function to get the number of days in the coupon period that contains the settlement date.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.COUPDAYS("1/10/2018", "6/15/2019", 4, 1));