// This example shows how to return the tangent of a complex numbers.

// How to get a tangent of a complex numbers.

// Use a function to get the tangent.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMTAN("-2+2.5i"));