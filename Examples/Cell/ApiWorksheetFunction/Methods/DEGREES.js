// This example shows how to convert radians to degrees.
// How to convert radians to degrees.
// Use function to get degrees from radians.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DEGREES(1.5));