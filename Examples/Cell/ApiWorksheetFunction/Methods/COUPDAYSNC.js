// This example shows how to return the number of days from the settlement date to the next coupon date.

// How to find the number of days from the settlement date to the next coupon date.

// Use function to get the number of days from the settlement date to the next coupon date.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.COUPDAYSNC("1/10/2018", "6/15/2019", 4, 1));