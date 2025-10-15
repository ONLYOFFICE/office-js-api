// This example shows how to return the arccotangent of a number, in radians in the range from 0 to Pi.

// How to get an arccotangent of a number and display it in the worksheet.

// Get a function that gets arccotangent of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOT(0));