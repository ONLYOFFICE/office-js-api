// This example shows how to check whether a value is text, and returns true or false.

// How to know whether a value is a text.

// Use a function to find out whether a value is a text.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISTEXT(255));
worksheet.GetRange("A2").SetValue(func.ISTEXT("#N/A"));
worksheet.GetRange("A3").SetValue(func.ISTEXT("Online Office"));