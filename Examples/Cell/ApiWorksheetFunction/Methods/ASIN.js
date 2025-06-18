// This example shows how to return the arcsine of a number in radians, in the range from Pi/2 to Pi/2.

// How to get an arcsine of a number in radians.

// Use function to get an arcsine of a number and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ASIN(0.25));