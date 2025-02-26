// This example shows how to replace existing text with new text in a text string.

// How to substitute a substring with another one.

// Use a function to replace a text with another one.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.SUBSTITUTE("Online Office is a cloud business service portal", "Office", "portal"));