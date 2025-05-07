// This example shows how to return the quotient of two complex numbers.

// How to get the quotient of two comlex numbers.

// Use a function to get the quotient.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMDIV("-2+2.5i", "0.1+1.5j"));