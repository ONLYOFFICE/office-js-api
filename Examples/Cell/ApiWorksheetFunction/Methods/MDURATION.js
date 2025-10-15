// This example shows how to return modified Macauley duration of a security with an assumed par value of $100.

// How to get a modified Macauley duration of a security.

// Use a function to get a result from modified Macauley duration.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MDURATION("1/10/2018", "6/15/2019", 0.08, 0.09, 4, 1));