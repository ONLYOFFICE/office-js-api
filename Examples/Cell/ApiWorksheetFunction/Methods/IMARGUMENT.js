// This example shows how to return the argument Theta, an angle expressed in radians.

// How to get an angle expressed in radians.

// Use a function to get an angle expressed in radians.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMARGUMENT("-2+2.5i"));