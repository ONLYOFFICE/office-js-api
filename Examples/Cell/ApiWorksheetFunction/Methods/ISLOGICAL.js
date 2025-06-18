// This example shows how to check whether a value is a logical value (true or false), and returns true or false. 

// How to check if the cell contains a logical value.

// Use a function to check whether a range data is a logical value.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange("B3").SetValue("66");

let func = Api.GetWorksheetFunction();
let result = func.ISLOGICAL(worksheet.GetRange("B3"));
worksheet.GetRange("C3").SetValue(result);
