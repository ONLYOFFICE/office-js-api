// This example shows how to return the yield of a security with an odd last period.

// How to get the yield of a security with specified odd last period.

// Use a function to return the yield of a security.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ODDLYIELD("1/1/2017", "6/1/2019", "12/1/2016", 0.06, 90, 100, 2));