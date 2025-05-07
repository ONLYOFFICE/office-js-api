// This example shows how to return a number matching an error value.

// How to get the error type code from the value.

// Use function to get a error type.

const worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let nonPositiveNum = 0;
let logResult = func.LOG(nonPositiveNum);
worksheet.GetRange("B3").SetValue(logResult);
worksheet.GetRange("C3").SetValue(func.ERROR_TYPE(logResult));
