// This example shows how to check whether a value is an error other than N/A, and returns true or false.

// How to check if the cell contains an error and not N/A value.

// Use a function to check whether the value is error or not and is not N/A.

const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("B3").SetValue("45")
let result = func.ISERROR("B3");
worksheet.GetRange("C3").SetValue(result)
