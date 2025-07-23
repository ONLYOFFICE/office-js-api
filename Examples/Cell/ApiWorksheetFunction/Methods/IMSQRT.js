// This example shows how to return the square root of a complex number.

// How to get the square root.

// Use a function to get the square root of a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSQRT("-2+2.5i"));
