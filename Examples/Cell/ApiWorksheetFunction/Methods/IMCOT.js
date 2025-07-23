// This example shows how to return the cotangent of a complex number.

// How to get the cotangent.

// Use a function to get the cotangent of a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMCOT("-2+2.5i"));