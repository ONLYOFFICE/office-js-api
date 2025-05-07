// This example shows how to convert degrees to radians.

// How to get radians from degree.

// Use a function to convert degrees to radians.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.RADIANS(90));