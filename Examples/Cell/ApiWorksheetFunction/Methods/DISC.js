// This example shows how to get the discount rate for a security.

// How to get a security discount rate.

// Use function to find security discount rate.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.DISC("10/15/2018", "1/1/2020", 98, 100, 1));
