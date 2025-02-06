// This example shows how to check whether a value is an error other than N/A, and returns true or false.
// How to check if the cell contains an error and not N/A value.
// Use a function to check whether the value is error or not and is not N/A.
const oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("B3").SetValue("45")
var result = oFunction.ISERROR("B3");
oWorksheet.GetRange("C3").SetValue(result)
