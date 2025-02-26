// This example shows how to return a number matching an error value.

// How to get the error type code from the value.

// Use function to get a error type.

const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
var nonPositiveNum = 0;
var logResult = oFunction.LOG(nonPositiveNum);
oWorksheet.GetRange("B3").SetValue(logResult);
oWorksheet.GetRange("C3").SetValue(oFunction.ERROR_TYPE(logResult));
