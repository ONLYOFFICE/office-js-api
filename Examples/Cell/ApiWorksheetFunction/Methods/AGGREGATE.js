// This example shows how to return an aggregate in a list or database.
// How to get an aggregate of a numbers and display it in the worksheet.
// Get a function that gets an aggregate from a list of numbers.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.AGGREGATE(9, 4, 10, 30, 50, 5));