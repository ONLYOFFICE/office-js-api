// This example shows how to return the hyperbolic secant of a complex number.

// How to get the hyperbolic secant.

// Use a function to get the hyperbolic secant of a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMSECH("-2+2.5i"));