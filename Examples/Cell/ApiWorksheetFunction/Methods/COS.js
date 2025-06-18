// This example shows how to get the cosine of an angle.

// How to find a cosine.

// Use function to get the cosine of an angle.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.COS(1.5));