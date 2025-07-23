// This example shows how to check whether a value is a reference, and returns true or false.

// How to know whether a value is a reference.

// Use a function to find out whether a value is a reference.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISREF("A3"));
worksheet.GetRange("A2").SetValue(func.ISREF(worksheet.GetRange("A3")));