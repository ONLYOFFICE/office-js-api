// This example shows how to convert a number from one measurement system to another.

// How to convert a number from one measurement system to another.

// Use function to convert a number from one measurement system to another.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CONVERT(2, "Ibm", "kg"));