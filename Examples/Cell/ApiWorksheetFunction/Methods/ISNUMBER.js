// This example shows how to check whether a value is a number, and returns true or false. 

// How to check if the cell contains a number.

// Use a function to check whether a range data is a numerical value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISNUMBER("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNUMBER(255));
worksheet.GetRange("A3").SetValue(func.ISNUMBER("Online Office"));