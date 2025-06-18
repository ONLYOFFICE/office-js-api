// This example shows how to return the inverse hyperbolic cotangent of a number.

// How to get an inverse hyperbolic cotangent of a number and display it in the worksheet.

// Get a function that gets inverse hyperbolic cotangent of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ACOTH(3));