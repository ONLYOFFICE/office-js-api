// Return a number matching an error value in a spreadsheet.

// Get the error type code from the value.

// Identify error types using ERROR_TYPE function in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let nonPositiveNum = 0;
let logResult = func.LOG(nonPositiveNum);
worksheet.GetRange("B3").SetValue(logResult);
worksheet.GetRange("C3").SetValue(func.ERROR_TYPE(logResult));