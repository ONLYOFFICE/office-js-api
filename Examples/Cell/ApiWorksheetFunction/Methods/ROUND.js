// This example shows how to round a number to a specified number of digits.

// How to round a number.

// Use a function to round a number to indicated number of digits.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ROUND(3.456, 2));