// This example shows how to return the hyperbolic cosecant of a complex number.

// How to get the hyperbolic cosecant.

// Use a function to get the hyperbolic cosecant of a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMCSCH("-2+2.5i"));