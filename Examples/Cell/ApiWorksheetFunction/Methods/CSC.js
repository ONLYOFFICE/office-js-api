// This example shows how to get the cosecant of an angle.

// How to return cosecant.

// Use function to get the cosecant of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.CSC(0.785398));