// This example shows how to return the hyperbolic sine of a complex number.

// How to get the hyperbolic sine.

// Use a function to get the hyperbolic sine of a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMSINH("-2+2.5i"));