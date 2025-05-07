// This example shows how to return the cosecant of a complex number.

// How to get the cosecant.

// Use a function to get the cosecant of a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMCSC("-2+2.5i"));
