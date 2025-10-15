// This example shows how to return the Bessel function Jn(x).

// How to get a result from Bessel function Jn(x).

// Use function to get the Bessel function Jn(x).

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELJ(1.9, 2));