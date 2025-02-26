// This example shows how to check whether a condition is met, and returns one value if true, and another value if false.

// How to check a condition.

// Use a function to use IF condition checker.

var oWorksheet = Api.GetActiveSheet();
var oFunction = Api.GetWorksheetFunction();
oWorksheet.GetRange("A1").SetValue(oFunction.IF("12<100", 0, 1));