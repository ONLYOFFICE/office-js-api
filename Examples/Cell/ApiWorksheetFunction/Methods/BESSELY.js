// This example shows how to return the modified Bessel function Yn(x).

// How to get a result from Bessel function Yn(x).

// Use function to get the Bessel function Yn(x).

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELY(2.5, 1));