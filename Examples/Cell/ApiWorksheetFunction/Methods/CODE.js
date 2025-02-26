// This example shows how to return the code number from your computer's character set for the first character in the specified text string.

// How to return the code number from your computer's character set.

// Use function to get a code number from your computer's character set.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CODE("office"));