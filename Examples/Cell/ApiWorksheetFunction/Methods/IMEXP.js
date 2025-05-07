// This example shows how to return the exponential of a complex number.

// How to get the exponential of a comlex numbers.

// Use a function to get the exponential.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMEXP("-2+2.5i"));
