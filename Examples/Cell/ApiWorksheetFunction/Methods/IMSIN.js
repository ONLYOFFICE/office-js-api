// This example shows how to return the sine of a complex number.

// How to get the sine.

// Use a function to get the sine of a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMSIN("-2+2.5i"));