// This example shows how to return the character specified by the code number from your computer's character set.
// How to return the character specified by the code number from your computer's character set.
// Use function to return the character specified by the code number from your computer's character set.
var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.CHAR(234));