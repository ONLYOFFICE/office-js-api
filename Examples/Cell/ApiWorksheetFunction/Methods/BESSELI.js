// This example shows how to return the modified Bessel function In(x).

// How to get a resutl from Bessel function In(x).

// Use function to get the modified Bessel function In(x).

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELI(3.5, 1));