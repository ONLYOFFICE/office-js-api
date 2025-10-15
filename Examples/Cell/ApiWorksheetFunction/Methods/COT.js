// This example shows how to get the cotangent of a number.

// How to find a cotangent.

// Use function to get the cotangent of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COT(0.785398));