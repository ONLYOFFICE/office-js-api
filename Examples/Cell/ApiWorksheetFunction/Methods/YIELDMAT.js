// This example shows how to return the annual yield of a security that pays interest at maturity.

// How to return annual yield of a security.

// Use a function to get a security annual yield.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.YIELDMAT("1/10/2018", "11/20/2019", "1/1/2017", "6.00%", 90));