// This example shows how to convert radians to degrees.

// How to convert radians to degrees.

// Use function to get degrees from radians.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.DEGREES(1.5));