// This example shows how to convert a value to a number, dates to serial numbers, true to 1, error to {@link global#ErrorValue ErrorValue}, anything else to 0 (zero).
// How to convert an object to a number.
// Use a function to get a number from any data type.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.N(false));