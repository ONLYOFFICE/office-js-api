// This example shows how to round a number up, away from zero.

// How to round a number up.

// Use a function to round a number away from zero.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ROUNDUP(3.456, 0));