// This example shows how to test whether two numbers are equal. The function returns 1 if the numbers are equal and 0 otherwise.
// How to compare two numbers.
// Use function to compare two numbers if it returns 1 they are equal else 0.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.DELTA(23, 24));