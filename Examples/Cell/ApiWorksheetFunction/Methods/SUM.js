// This example shows how to add all the numbers in a range of cells.
// How to sum up all values from the list.
// Use a function to estimate a sum from the cells.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SUM(145, 37, 236, 69, 567, 92));