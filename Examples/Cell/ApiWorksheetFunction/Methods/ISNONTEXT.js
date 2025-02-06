// This example shows how to check whether a value is not text (blank cells are not text), and returns true or false. 
// How to check if the cell contains a non-text value.
// Use a function to check whether a range data is a text or not.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISNONTEXT("#N/A"));
oWorksheet.GetRange("A2").SetValue(oFunction.ISNONTEXT(255));
oWorksheet.GetRange("A3").SetValue(oFunction.ISNONTEXT("Online Office"));