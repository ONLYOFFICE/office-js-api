// This example shows how to check whether a value is a number, and returns true or false. 

// How to check if the cell contains a number.

// Use a function to check whether a range data is a numerical value.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.ISNUMBER("#N/A"));
oWorksheet.GetRange("A2").SetValue(oFunction.ISNUMBER(255));
oWorksheet.GetRange("A3").SetValue(oFunction.ISNUMBER("Online Office"));