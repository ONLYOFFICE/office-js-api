// This example shows how to return the yield on a security that pays periodic interest.

// How to return the yield on a security.

// Use a function to calculate the yield on a security that pays periodic interest.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.YIELD("1/10/2018", "11/20/2019", "3.75%", 90, 100, 4));