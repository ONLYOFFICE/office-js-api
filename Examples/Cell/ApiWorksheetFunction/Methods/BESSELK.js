// This example shows how to return the modified Bessel function Kn(x).

// How to get a result from Bessel function Kn(x).

// Use function to get the Bessel function Kn(x).

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.BESSELK(1.5, 1));