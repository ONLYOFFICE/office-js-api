// This example shows how to return the complex conjugate of a complex number.

// How to get the complex conjugate.

// Use a function to get the complex conjugate of a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMCONJUGATE("-2+2.5i"));