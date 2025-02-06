// This example shows how to remove all the nonprintable characters from the text.
// How to remove all the nonprintable characters from the text.
// Use function to clean all nonprintable characters.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CLEAN("\ntext"));