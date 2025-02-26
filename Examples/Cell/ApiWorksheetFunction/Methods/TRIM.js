// This example shows how to remove all spaces from a text string except for single spaces between words.

// How to delete unneccessary spaces from the text.

// Use a function to clear spaces from a string.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.TRIM("  Online Office"));