// This example shows how to check whether two text strings are exactly the same, and returns true or false. This function is case-sensitive.

// How to compare strings.

// Use function to compare two texts (case-sensitive).

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.EXACT("MyPassword", "mypassword"));