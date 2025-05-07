// This example shows how to return the secant of a complex number.

// How to get the secant.

// Use a function to get the secant of a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMSEC("-2+2.5i"));