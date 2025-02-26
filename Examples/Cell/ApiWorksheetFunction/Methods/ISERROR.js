// This example shows how to check whether a value is an error, and returns true or false.

// How to check if the cell contains an error.

// Use a function to check whether the value is error or not.

const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("B3").SetValue("#N/A")
var result = oFunction.ISERR("B3");
oWorksheet.GetRange("C3").SetValue(result)
