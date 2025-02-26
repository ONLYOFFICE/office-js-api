// This example shows how to replace a part of a text string with a different text string.

// How to replace a substring with another one.

// Use a function to replace one part of a text with another one.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.REPLACE("Online Office", 8, 6, "portal"));