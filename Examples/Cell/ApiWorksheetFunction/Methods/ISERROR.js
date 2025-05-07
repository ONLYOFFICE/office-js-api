// This example shows how to check whether a value is an error, and returns true or false.

// How to check if the cell contains an error.

// Use a function to check whether the value is error or not.

const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("B3").SetValue("#N/A")
let result = func.ISERR("B3");
worksheet.GetRange("C3").SetValue(result)
