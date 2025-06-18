// This example shows how to return the hyperbolic cosine of a complex number.

// How to get the hyperbolic cosine.

// Use a function to get the hyperbolic cosine of a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMCOSH("-2+2.5i"));
