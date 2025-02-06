// This example shows how to return a subtotal in a list or database.
// How to calculate a subtotal.
// Use a function to estimate a subtotal from the list.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SUBTOTAL(9, 10, 30, 50, 5));