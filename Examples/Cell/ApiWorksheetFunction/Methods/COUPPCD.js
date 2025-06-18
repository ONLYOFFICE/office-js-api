// This example shows how to return the previous coupon date before the settlement date.

// How to return the previous coupon date before the settlement date.

// Use function to get the previous coupon date.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.COUPPCD("1/10/2018", "6/15/2019", 4, 1));