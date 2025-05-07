// This example shows how to return the real coefficient of a complex number.

// How to get the real coefficient.

// Use a function to get the real coefficient of a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMREAL("-2+2.5i"));